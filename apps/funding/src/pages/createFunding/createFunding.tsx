import { MainButton } from '@repo/ui/components';
import { Layout, Title, WarningText } from '@repo/ui/styles';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatPriceToNumber } from '../../../../../packages/ui/utils/format';
import AddedItem from '../../components/added-item/addedItem';
import CategoryGroup from '../../components/category/categoryGroup';
import CreateModal from '../../components/create-funding-page/createModal';
import ImageUpload from '../../components/create-funding-page/imageUpload';
import InfoForm from '../../components/create-funding-page/infoForm';
import IntroForm from '../../components/create-funding-page/introForm';
import OptionAddModal from '../../components/create-funding-page/optionAddModal';
import InputTextArea from '../../components/input-text-area/inputTextArea';
import { Label } from '../../components/input-text/inputText.styles';
import PointButton from '../../components/point-button/pointButton';
import { DEFAULT_OPTION } from '../../constants/items';
import { useCategoryConfigs } from '../../hooks/useCategoryConfigs';
import { useCreateFunding } from '../../hooks/useCreateFunding';
import { useImageUpload } from '../../hooks/useImageUpload';
import type {
  CreateFundingData,
  Option,
} from '../../types/createFunding.types';
import { CompWrapper, CreateFundingStyle } from './createFunding.styles';

function CreateFunding() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [title, setTitle] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [description, setDescription] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [aiSummary, setAiSummary] = useState('');

  const [addedOptions, setAddedOptions] = useState<Option[]>([DEFAULT_OPTION]);
  const [optionTitle, setOptionTitle] = useState('');
  const [optionContent, setOptionContent] = useState('');
  const [optionPrice, setOptionPrice] = useState('');

  const [isSubmit, setIsSubmit] = useState(false);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [isFundiOpen, setIsFundiOpen] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const { configs, category, gender, age } = useCategoryConfigs();
  const { mutate: createFunding } = useCreateFunding();
  const { mutateAsync: uploadImage } = useImageUpload();

  // 로그인 임시 연동 코드
  // useEffect(() => {
  //   const autoLogin = async () => {
  //     try {
  //       await tempLogin('g@mail.com', 'zzz111');
  //       console.log('임시 로그인');
  //     } catch (err) {
  //       console.log('로그인 실패: ', err);
  //     }
  //   };
  //   autoLogin();
  // }, []);

  const handleImageUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setImageFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const isInvalidDate = (startDate: string, endDate: string) => {
    if (!startDate || !endDate) return false;
    return new Date(endDate) < new Date(startDate);
  };

  const isValidOption = () =>
    [optionTitle, optionContent, optionPrice].every((value) => value.trim());

  const handleAdd = () => {
    setIsAdd(true);

    if (!isValidOption()) return;
    if (addedOptions.length >= 5) return;

    setAddedOptions((prev) => [
      ...prev,
      {
        title: optionTitle,
        description: optionContent,
        price: formatPriceToNumber(optionPrice),
      },
    ]);

    setOptionTitle('');
    setOptionContent('');
    setOptionPrice('');
    setIsAddOpen(false);
    setIsAdd(false);
  };

  const handleDelete = (index: number) => {
    setAddedOptions((prev) => prev.filter((_, i) => i !== index));
  };

  const isValidFunding = () =>
    imageFile !== null &&
    [
      title.trim(),
      goalAmount.trim(),
      startDate.trim(),
      endDate.trim(),
      deliveryDate.trim(),
      description.trim(),
      shortDescription.trim(),
    ].every(Boolean) &&
    category !== null &&
    gender !== null &&
    age !== null &&
    addedOptions.length > 0;

  const handleSubmit = () => {
    setIsSubmit(true);
    if (!isValidFunding()) return;
    setIsSubmitOpen(true);
  };

  const summaryRef = useRef<HTMLParagraphElement>(null);
  const handleCopy = () => {
    if (!summaryRef.current) return;

    const text = summaryRef.current.innerText.trim();
    if (!text) return;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setShortDescription(text);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleCreate = async () => {
    if (!imageFile || category === null || gender === null || age === null)
      return;

    try {
      const imageUrl = await uploadImage(imageFile);
      console.log(imageUrl);

      const data: CreateFundingData = {
        image_url: imageUrl,
        title: title,
        goal_amount: formatPriceToNumber(goalAmount),
        start_date: startDate,
        end_date: endDate,
        delivery_date: deliveryDate,
        short_description: shortDescription,
        description: description,
        category_id: category,
        options: addedOptions,
        gender: gender,
        age_group: age,
      };

      setIsSubmitOpen(false);

      createFunding(data, {
        onSuccess: (data) => {
          console.log('펀딩 개설 성공');
          navigate(`/product/${data.project_id}`);
        },
        onError: (error) => {
          alert('펀딩 개설 실패');
          console.error('펀딩 개설 실패: ', error);
        },
      });
    } catch (err) {
      alert('이미지 업로드 실패');
      console.log('이미지 업로드 실패: ', err);
    }
  };

  return (
    <Layout>
      <CreateFundingStyle>
        <Title>프로젝트(펀딩) 개설</Title>

        <div className="flex flex-col gap-[20px]">
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <ImageUpload preview={preview} onClick={handleImageUpload} />
          {isSubmit && imageFile === null && (
            <WarningText>이미지를 등록해주세요.</WarningText>
          )}
        </div>

        <InfoForm
          title={title}
          setTitle={setTitle}
          isSubmit={isSubmit}
          goalAmount={goalAmount}
          setGoalAmount={setGoalAmount}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          isInvalidDate={isInvalidDate}
          deliveryDate={deliveryDate}
          setDeliveryDate={setDeliveryDate}
        />

        <IntroForm
          description={description}
          setDescription={setDescription}
          aiSummary={aiSummary}
          setAiSummary={setAiSummary}
          isSubmit={isSubmit}
          isFundiOpen={isFundiOpen}
          setIsFundiOpen={setIsFundiOpen}
          summaryRef={summaryRef}
          copied={copied}
          handleCopy={handleCopy}
        />

        <InputTextArea
          label="한 줄 소개"
          placeholder="한 줄 소개를 입력하세요."
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
          maxLength={50}
          width="sm:w-[350px]"
          isError={isSubmit && shortDescription.trim().length === 0}
        />

        <CompWrapper>
          <Label>분류</Label>
          <CategoryGroup configs={configs} />
          {isSubmit &&
            (category === null || gender === null || age === null) && (
              <WarningText>카테고리와 타겟층을 선택하세요.</WarningText>
            )}
        </CompWrapper>

        <CompWrapper>
          <div className="w-auto flex justify-between items-center">
            <Label>상품 추가</Label>
            {addedOptions.length < 5 && (
              <PointButton
                label="상품 추가하기"
                onClick={() => setIsAddOpen(true)}
              />
            )}
          </div>
          <OptionAddModal
            isAddOpen={isAddOpen}
            setIsAddOpen={setIsAddOpen}
            isAdd={isAdd}
            optionTitle={optionTitle}
            setOptionTitle={setOptionTitle}
            optionContent={optionContent}
            setOptionContent={setOptionContent}
            optionPrice={optionPrice}
            setOptionPrice={setOptionPrice}
            handleAdd={handleAdd}
          />

          <div className="flex flex-col gap-[10px]">
            {addedOptions.map((option, index) => (
              <AddedItem
                key={index}
                price={String(option.price)}
                title={option.title}
                content={option.description}
                onRemove={() => {
                  handleDelete(index);
                }}
              />
            ))}
          </div>
          {isSubmit && addedOptions.length === 0 && (
            <WarningText>상품을 추가해주세요.</WarningText>
          )}
        </CompWrapper>

        <div className="flex justify-end">
          <MainButton
            width="w-[200px]"
            label="개설하기"
            onClick={handleSubmit}
          />
          <CreateModal
            isSubmitOpen={isSubmitOpen}
            setIsSubmitOpen={setIsSubmitOpen}
            handleCreate={handleCreate}
          />
        </div>
      </CreateFundingStyle>
    </Layout>
  );
}

export default CreateFunding;
