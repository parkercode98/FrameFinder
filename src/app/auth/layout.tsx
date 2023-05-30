// -------------------------------------------------------------------------- //
//-                               AUTH (LAYOUT)                              -//
// -------------------------------------------------------------------------- //
import { config } from '@/config';
import { WithChildren } from '@/types/typeUtils';
import { Logo } from '@/ui/Logo';
import { c } from '@/utils/componentUtils';
import WaveyBG from '../../../public/WaveyBG.png';
const { primaryFeatures } = config.pages.landing;
/* -------------------------------------------------------------------------- */

export const metadata = {
  title: 'Auth',
};

const styles = {
  wrapper: c(`AuthPage relative flex h-full w-full flex-col flex-wrap lg:flex-row`),
  formWrapper: c(
    `Form__Wrapper inset-0 flex flex-1 items-center justify-center md:p-5 lg:p-10 sm-:absolute`
  ),
  formContainer: c(
    `Form__Container relative flex h-full w-full items-center justify-center overflow-hidden rounded-none bg-[--color-background-main] px-[2rem] pb-[3rem] pt-[2.375rem] md:max-h-[850px] md:max-w-[620px] md:rounded-2xl md:bg-[--color-paper-main] md:shadow-xl lg:h-fit lg:rounded-2xl md+:px-[4rem] md+:pb-[3rem] md+:pt-[2.375rem]`
  ),
  feedWrapper: c(
    `Feed__Wrapper relative hidden flex-1 overflow-hidden items-center justify-center p-8 lg+:flex`
  ),
  feedContainer: c(
    `Feed__Container relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-xl before:absolute before:inset-0 before:bg-paper-main before:opacity-25 before:z-[-5]`
  ),
};

export default function AuthLayout({ children }: WithChildren) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>{children}</div>
      </div>
      <div className={styles.feedWrapper}>
        <div
          className={styles.feedContainer}
          style={{
            backgroundImage: `
              url(${WaveyBG.src})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='z-10 mb-20'>
            <h1 className='text-6xl font-bold'>
              Law School <span className='text-pink-500'>Ai</span>
            </h1>
            <h2 className='text-3xl'>Your Ultimate Study Partner</h2>
          </div>
          <div className='absolute bottom-0 left-0 right-0 z-10 h-60 overflow-hidden'>
            <CardSlider />
          </div>
        </div>
      </div>
      <div className='absolute left-8 top-8 hidden md:left-5 md:top-5 md:block lg:left-10 lg:top-10 short:left-5 short:top-5'>
        <Logo size={38} linkHome />
      </div>
    </div>
  );
}

function CardSlider() {
  return (
    <div className='carousel h-full w-full'>
      {primaryFeatures.map((feature, index, array) => {
        const len = array.length;
        const current = index + 1;
        const prev = current - 1 < 1 ? len - 1 : index;
        const next = current + 1 > len - 1 ? 1 : current + 1;
        return (
          <div
            key={index}
            id={`slide${index + 1}`}
            className='carousel-item relative flex w-full items-center justify-center'
          >
            <HorizontalCard
              title={feature.name}
              description={feature.description}
              icon={<feature.icon className=' text-pink-500' />}
            />
            <div className='absolute inset-0 flex items-center justify-between px-6'>
              <a href={`#slide${prev}`}>
                <div className='p-4'>{'❮'}</div>
              </a>
              <a href={`#slide${next}`}>
                <div className='p-4'>{'❯'}</div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function HorizontalCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className='card mx-20 w-full bg-[#1f2937ac] shadow-xl backdrop-blur-md'>
      <div className='card-body'>
        <div className='flex items-center gap-2'>
          <div className='avatar'>
            <div className='w-9 rounded shadow-xl'>{icon}</div>
          </div>
          <h2 className='card-title'>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}
