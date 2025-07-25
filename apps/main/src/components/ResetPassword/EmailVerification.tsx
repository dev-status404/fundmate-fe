import { InputContainer } from "../../styles/User/SignUp.style"
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as yup from 'yup'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputText, MainButton } from "@repo/ui/components";
import { MediumFont, SubTitle, Title } from "@repo/ui/styles";
import useTimer from "../../hooks/useTimer";
import { commonApiInstance } from "@repo/ui/hooks";
import { emailVerifiedStore } from "../../stores/EmailVerifiedStore";

const schema = yup.object({
  email: yup.string().email().required(),
  verificationCode: yup.string().required()
})

type EmailVerificationProps = yup.InferType<typeof schema>

export const EmailVerificationComponent = () => {
  const [_, setSearchParams] = useSearchParams();
  const [verificateRequested, setVerificateRequest] = useState(false);
  const [codeCheck, setCodeCheck] = useState<'pass' | 'fail' | null>(null);
  const setEmail = emailVerifiedStore((state) => state.setEmail);
  const setCode = emailVerifiedStore((state) => state.setCode);

  const {
    timeLeft,
    isRunning: isTimeRunning,
    hasTimerEnded,
    startTimer,
    resetTimer,
    formatTime
  } = useTimer()

  const verificateHandleClick = async () => {
    await commonApiInstance.post('/auth/codes/send', { email: getValues('email') })
      .then(response => {
        setVerificateRequest(true);
        console.log(response);
        resetTimer();
        startTimer();
        if (hasTimerEnded && verificateRequested) setVerificateRequest(false);
      })
      .catch(error => {
        console.error(error)
      })
  }

  const onSubmit = async () => {
    await commonApiInstance.post('/auth/codes/verify', {
      email: getValues('email'),
      code: getValues('verificationCode')
    })
      .then(response => {
        console.log(response);
        setEmail(getValues('email'));
        setCode(getValues('verificationCode'));
        window.localStorage.setItem('auth', 'done')
        setSearchParams({ 'auth': 'done' });
      })
      .catch(error => {
        console.error(error);
        setCodeCheck('fail')
      })
  }
  const { register, getValues, trigger, formState: { errors } } = useForm<EmailVerificationProps>({
    resolver: yupResolver(schema),
    shouldFocusError: false,
    mode: 'onChange',
    reValidateMode: 'onChange'
  });

  const buttonLabel: string = isTimeRunning && timeLeft > 0 ? formatTime(timeLeft) : ''

  return (
    <form className="flex flex-col w-full gap-5">
      <Title>비밀번호 재설정</Title>
      <InputContainer>
        <SubTitle>이메일</SubTitle>
        <InputText
          type="text"
          placeholder="가입하신 이메일 주소를 입력해주세요."
          isError={!!errors.email}
          {...register('email')}
          autoComplete='email'
          onFocus={() => trigger('email')}
        />
        {
          !verificateRequested ?
            <MediumFont className="text-gray-400">회원가입에 사용한 이메일 주소를 입력하시면 인증번호를 보내드립니다.</MediumFont> :
            <MediumFont className="text-gray-400">기입하신 이메일로 인증번호가 전송되었습니다.</MediumFont>
        }
        {
          !verificateRequested ? '' : (
            <>
              <InputContainer>
                <SubTitle>인증번호</SubTitle>
                <InputText
                  type="number"
                  placeholder="인증번호를 입력해주세요."
                  autoComplete="off"
                  {...register('verificationCode')}
                  onFocus={() => trigger('verificationCode')}
                />
                {codeCheck === 'fail' && <MediumFont className="text-red">유효하지 않은 인증 번호입니다.</MediumFont>}
              </InputContainer>
              <MediumFont>{buttonLabel}</MediumFont>
            </>
          )
        }
      </InputContainer>
      {
        !verificateRequested ? (
          <MainButton
            type="button"
            onClick={verificateHandleClick}
            isError={!getValues('email') || !!errors.email}
            disabled={!getValues('email') || !!errors.email}
            width="w-full"
            label="인증번호 발송"
          />
        ) : (
          <MainButton
            type="button"
            onClick={onSubmit}
            isError={!getValues('verificationCode')}
            disabled={!getValues('verificationCode')}
            label="인증하기"
          />
        )
      }
    </form>
  )
}

