import styled from 'styled-components'

const Dialog = styled.dialog`
  top: 0;
  position: fixed;
  border: none;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 999;

  p {
    color: #fff;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px; /* 140% */
  }
`

const Icon = styled.div`
  font-size: 44px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

type Props = {
  isOpen: boolean
}

function Complete({ isOpen }: Props) {
  return (
    <Dialog open={isOpen}>
      <Icon>🎉</Icon>
      <p>집중해서 끝내셨군요.</p>
      <p>대단해요!</p>
    </Dialog>
  )
}

export default Complete
