'use client';
import { Hero, ButtonSecondary } from '@/devlink';

export default function Home() {
  return (
    <>
      <Hero
        heading="Overwriting heading from DevLink!"
        buttonText="Learn more about DevLink"
        buttonLink={{
          href:
            'https://docs.developers.webflow.com/docs/devlink-documentation-and-usage-guide',
          target: '_blank',
        }}
        buttonAction={{ onClick: () => console.log('Button Action!') }}
        button2={
          <ButtonSecondary
            buttonText="Great quick video on DevLink and Next.js 13"
            buttonLink={{
              href:
                'https://www.loom.com/share/e18fb2d2928b402da8a53bdb83d88eca',
              target: '_blank',
            }}
          />
        }
      />
    </>
  );
}
