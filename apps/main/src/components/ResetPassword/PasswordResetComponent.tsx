import { Link, useSearchParams } from "react-router-dom"
import { SignUpContainer } from "../../styles/User/SignUp.style"
import { UserContainer, UserLayout, UserNaigater } from "../../styles/User/UserPage.Styles"
import { EmailVerificationComponent } from "./EmailVerification"
import { useEffect, useState } from "react"
import { ChangePassword } from "./ChangePassword"
import { MediumFont } from "@repo/ui/styles"

export const PasswordResetComponent = () => {
  const [searchParams] = useSearchParams();
  const [authState, setAuthState] = useState<string | null>(null);
  const isAuthorized = authState === 'done';

  useEffect(() => {
    setAuthState(searchParams.get('auth'))
  }, [searchParams])

  return (
    <UserLayout>
      <UserContainer>
        <SignUpContainer>
          {
            isAuthorized
              ? <ChangePassword />
              : <EmailVerificationComponent />
          }
          <UserNaigater>
            <Link to='/login'>
              <MediumFont>
                로그인 화면으로 돌아가기
              </MediumFont>
            </Link>
          </UserNaigater>
        </SignUpContainer>
      </UserContainer>
    </UserLayout>
  )
}
