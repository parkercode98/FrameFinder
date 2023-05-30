'use client';
import { PropsOf } from '@/types/typeUtils';
import { c } from '@/utils/componentUtils';
import { UserButton as _UserButton, useUser } from '@clerk/nextjs';
import { forwardRef } from 'react';

type UserButtonProps = PropsOf<typeof _UserButton> & { className?: string };

export const UserButton = forwardRef(({ className, ...props }: UserButtonProps, ref) => {
  const { isLoaded, isSignedIn } = useUser();
  const loading = !isLoaded || !isSignedIn;

  const styles = c('aspect-square w-9 rounded-full [border:2px_solid_#b3becc]', className);

  return (
    <>
      {loading ? (
        <span className={styles}>
          <DefaultUserAvatar />
        </span>
      ) : (
        <_UserButton {...props} appearance={{ elements: { rootBox: styles } }} />
      )}
    </>
  );
});

export function DefaultUserAvatar() {
  return (
    <svg
      viewBox='0 0 18.00 18.00'
      xmlns='http://www.w3.org/2000/svg'
      fill='#000000'
      stroke='#000000'
      strokeWidth='0.00018'
      className='h-full w-full'
    >
      <g id='SVGRepo_bgCarrier' strokeWidth='0' transform='translate(0,0), scale(1)'>
        <rect x='0' y='0' width='18.00' height='18.00' rx='9' fill='#b3becc' strokeWidth='0'></rect>
      </g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
        stroke='#CCCCCC'
        strokeWidth='0.036'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          fill='#5f6c7d'
          d='M9 0a9 9 0 0 0-9 9 8.654 8.654 0 0 0 .05.92 9 9 0 0 0 17.9 0A8.654 8.654 0 0 0 18 9a9 9 0 0 0-9-9zm5.42 13.42c-.01 0-.06.08-.07.08a6.975 6.975 0 0 1-10.7 0c-.01 0-.06-.08-.07-.08a.512.512 0 0 1-.09-.27.522.522 0 0 1 .34-.48c.74-.25 1.45-.49 1.65-.54a.16.16 0 0 1 .03-.13.49.49 0 0 1 .43-.36l1.27-.1a2.077 2.077 0 0 0-.19-.79v-.01a2.814 2.814 0 0 0-.45-.78 3.83 3.83 0 0 1-.79-2.38A3.38 3.38 0 0 1 8.88 4h.24a3.38 3.38 0 0 1 3.1 3.58 3.83 3.83 0 0 1-.79 2.38 2.814 2.814 0 0 0-.45.78v.01a2.077 2.077 0 0 0-.19.79l1.27.1a.49.49 0 0 1 .43.36.16.16 0 0 1 .03.13c.2.05.91.29 1.65.54a.49.49 0 0 1 .25.75z'
        ></path>{' '}
      </g>
    </svg>
  );
}
