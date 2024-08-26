import React from 'react'
import { Assets, ScreenViewEnum } from './assets'
import { Container, Main, MainContent, Wrapper } from './components'

type ScreenViewTypes = 'mobile' | 'tablet' | 'desktop' | null

export default function App() {
  const [width, setWidth] = React.useState(window.innerWidth)
  const [screenView, setScreenView] = React.useState<ScreenViewTypes>(null)

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  React.useEffect(() => {
    if (width < 768) {
      setScreenView(ScreenViewEnum.mobile)
    } else if (width >= 768 && width < 1280) {
      setScreenView(ScreenViewEnum.tablet)
    } else {
      setScreenView(ScreenViewEnum.desktop)
    }
  }, [width])

  return (
    <Main className='font-chivo relative grid place-items-center md:flex 2xl:justify-center p-[36px] md:px-[44px] xl:p-[80px] min-h-screen min-w-full bg-[url(/src/assets/mobile/image-host.jpg)] bg-cover bg-no-repeat before:absolute before:w-full before:h-full before:bg-[#121725] before:opacity-90 overflow-hidden md:bg-none md:bg-[#121725] md:before:bg-transparent'>

      <Container className='md:w-[87.5%] relative max-w-[1120px]'>

        {/* Background Images Tablet */}
        {ScreenViewEnum.tablet === screenView && (
          <img className='absolute bottom-0 right-[-37.5%] w-full object-contain max-h-[868px]' src={Assets.Tablet.imageHost} alt="" />
        )}
        {ScreenViewEnum.tablet === screenView && (
          <img className='absolute bottom-[-52px] left-[104%] object-fill ' src={Assets.Desktop.bgPatternDots} alt="" />
        )}

        {/* Background Images Desktop */}
        {ScreenViewEnum.desktop === screenView && (
          <img className='absolute bottom-0 right-[-37.5%] w-full object-contain max-h-[654px]' src={Assets.Desktop.imageHost} alt="" />
        )}
        {ScreenViewEnum.desktop === screenView && (
          <img className='absolute bottom-[-52px] left-[100%] object-fill ' src={Assets.Desktop.bgPatternDots} alt="" />
        )}

        <Wrapper className='relative flex flex-col gap-[56px] md:w-[60%] md:min-w-[592px] xl:w-[75%] xl:min-w-[736px]'>
          {/* #1 */}
          <img className='md:self-start object-contain max-h-[56px]' src={Assets.Desktop.logo} alt="" />

          {/* #2 */}
          <MainContent screenView={screenView} />
        </Wrapper>
      </Container>
    </Main>
  )
}
