import React from 'react';
import Data from './Data';

export default function Data1() {
  return (
    <>
    <div className='space-x-10'>
      <Data
        image="https://assets-global.website-files.com/65ccaaa92512d0a2d9847001/65d34f42b39a5f4c2a087a82_Frame%204503.svg"
        heading="Gain Real Time Insights
        from data across your
        systems"
        dataset={`Automate data pipelines in minutes
        Unify siloed customer data from multiple systems
        Parallelised Execution to handle high data volumes
        Granular access control for data security`}
        Largeimg="https://assets-global.website-files.com/65ccaaa92512d0a2d9847001/65d6dac0740039ae2180f3c1_Frame%204523.png"
      />
      <Data
        image="https://assets-global.website-files.com/65ccaaa92512d0a2d9847001/65d34fed1057c4827d1a7df3_Frame%204503.svg"
        heading="Automate entire business processes across teams"
        dataset={`AI powered low code builder
        Connect instantly with 1000+ prebuilt connectors
        Add any new integration in less than a day
        Cloud native one touch deployment`}
        Largeimg="https://assets-global.website-files.com/65ccaaa92512d0a2d9847001/65d6db3fe705e4a655dcb318_Frame%204524.png"
      />
      <Data
        image="https://assets-global.website-files.com/65ccaaa92512d0a2d9847001/65d3501455a70b8eeb096c21_Frame%204503.svg"
        heading="Create complex applications without writing code"
        dataset={`Customer facing & internal applications
        Visual Debugging & Change Management
        AI Assisted visual development
        Enterprise-grade security and scalability`}
        Largeimg="https://assets-global.website-files.com/65ccaaa92512d0a2d9847001/65d6db625c065e6797aeb660_Frame%204525.png"
      />
      </div>
    </>
  );
}
