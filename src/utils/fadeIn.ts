import gsap from 'gsap'
export const fadeIn = (
  className: string,
  hiddenOnComplete: boolean,
  delayArg?: number,
  durationArg?: number
) => {
  const duration = durationArg || 2
  const delay = delayArg || 2

  return gsap.fromTo(
    className,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      duration: duration,
      delay: delay,
      onComplete: () => {
        hiddenOnComplete
          ? gsap.to(className, { autoAlpha: 0, duration: 1, delay: 2 })
          : null
      },
    }
  )
}
