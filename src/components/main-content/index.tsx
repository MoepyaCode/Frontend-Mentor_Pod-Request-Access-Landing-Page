import React, { ElementRef } from 'react'
import { Assets, ScreenViewEnum } from '../../assets'

type Props = {
  screenView: 'mobile' | 'tablet' | 'desktop' | null
}

export default function MainContent(props: Props) {
  const emailRef = React.useRef<ElementRef<'input'>>(null)
  const [error, setError] = React.useState<string | null>(null)

  function musicPlatformsContent() {
    const data: string[] = [
      Assets.Desktop.spotify,
      Assets.Desktop.applePodcasts,
      Assets.Desktop.googlePodcasts,
      Assets.Desktop.pocketCasts,
    ]

    return (
      <div className='flex flex-wrap justify-evenly gap-[6px] md:justify-start md:gap-[40px] md:pt-[24px]'>
        {data.map((item, index) => (
          <img className='object-contain h-[16.95px] md:h-[25.83px]' key={index} src={item} alt="" />
        ))}
      </div>
    )
  }

  function subscribeFormContent() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(emailRef.current?.value || '')) {
          throw new Error('Oops! Please check your email')
        }
        setError(null)
        e.currentTarget.reset()
      } catch (error) {
        setError((error as Error).message)
      }
    }

    return (
      <div className='self-center md:self-auto w-full max-w-[448px] flex flex-col gap-[8px]'>
        <form onSubmit={handleSubmit} className={`self-center md:self-auto flex flex-col flex-nowrap gap-[8px] sm:gap-0 sm:flex-row w-full max-w-[448px]  sm:bg-[#2C344B] sm:rounded-full sm:border-[#2C344B] ${error ? 'sm:outline sm:outline-[3px] sm:border-2 sm:outline-[#FB3E3E]' : 'sm:border-4 sm:outline-none'}`}>
          <input ref={emailRef} className={`flex-grow h-[44px] text-white font-bold text-[14px] leading-[200%] pl-[28px] outline-none border-none rounded-full sm:rounded-r-none bg-[#2C344B] placeholder-white placeholder:opacity-50 placeholder:text-[14px] placeholder:leading-[200%] placeholder:font-bold`} placeholder='Email address' type="text" />
          <button type='submit' className='bg-[#54E6AF] relative grid place-items-center before:absolute before:w-full before:h-full before:bg-transparent before:hover:bg-white before:hover:opacity-50 overflow-hidden before:transition before:ease-in before:duration-300 h-[44px] rounded-full font-bold text-slate-900 text-[14px] leading-[200%] sm:w-[172px]'>
            <span className='z-10'>Request Access</span>
          </button>
        </form>
        {error && <p className='self-center md:self-auto font-bold text-[12px] text-[#FB3E3E] md:pl-[32px]'>{error}</p>}
      </div>
    )
  }

  return (
    <div className='relative flex flex-col gap-[40px] md:pt-[88px] md:bg-[#121725]'>

      {/* #1 */}
      <div className='font-light flex flex-col gap-[16px] md:gap-[24px] text-center md:text-left md:w-[62.5%] xl:w-[80%]'>
        <h1 className='uppercase text-[32px] md:text-[48px] leading-[120%] text-white'>
          <span className='text-[#54E6AF]'>Publish your podcasts</span> everywhere.
        </h1>

        <p className='text-[#C2CBE5] text-[14px] md:text-[18px] leading-[120%] xl:w-[72.5%]'>
          Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and more!
        </p>
      </div>

      {/* #2 */}
      {(ScreenViewEnum.mobile === props.screenView) && musicPlatformsContent()}
      {!(ScreenViewEnum.mobile === props.screenView) && subscribeFormContent()}


      {/* #3 */}
      {(ScreenViewEnum.mobile === props.screenView) && subscribeFormContent()}
      {!(ScreenViewEnum.mobile === props.screenView) && musicPlatformsContent()}
    </div>
  )
}
