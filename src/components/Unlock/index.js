import {useState} from 'react'

import {UnlockContainer, Text, UnlockButton, Image} from './styledComponents'

const Unlock = () => {
  const [button, setButton] = useState(false)
  const text = button ? ' Your Device is Unlocked ' : ' Your Device is locked '
  const buttonText = button ? ' Lock' : ' Unlock '
  const altText = button ? ' unlock' : 'lock'

  const imgeUrl = button
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png '
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png  '
  const onClickButton = () => {
    setButton(prevState => !prevState)
  }

  return (
    <UnlockContainer>
      <Image src={imgeUrl} alt={altText} />
      <Text> {text}</Text>

      <UnlockButton type="button" onClick={onClickButton}>
        {buttonText}
      </UnlockButton>
    </UnlockContainer>
  )
}

export default Unlock
