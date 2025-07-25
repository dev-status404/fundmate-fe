import { MediumFont } from '@repo/ui/styles';
import { Price, Wrapper } from './addedItem.styles';
import { IoClose } from 'react-icons/io5';
import { formatPrice } from '@repo/ui/utils';

interface Props {
  price: string;
  title: string;
  content: string;
  onRemove: () => void;
}

const AddedItem = ({ price, title, content, onRemove }: Props) => {
  return (
    <Wrapper>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <Price>{formatPrice(price)}원</Price>
          <IoClose size={20} className="cursor-pointer" onClick={onRemove} />
        </div>
        <MediumFont>{title}</MediumFont>
      </div>
      <MediumFont className="text-sub-text whitespace-pre-line">
        {content}
      </MediumFont>
    </Wrapper>
  );
};

export default AddedItem;
