import React from 'react'
import { Button } from '../../components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { dummyInterviews } from '@/constants';
import InterviewCard from '@/components/InterviewCard';

const Page = () => {
  return (

    <>
        <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
            <h2>Get interview ready with AI-powered practice and feedback</h2>
            <p className='text-lg'> Practice on real interview questions and get instant feedback</p>

            <Button asChild className='btn-primary max-sm:w-full'>
              <Link href = "/interview">Start an Interview</Link>
            </Button>
        </div>
        <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden"></Image>
        </section>

        <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>

        <div>
        {dummyInterviews.map((interview) => (
                <InterviewCard {...interview} key ={interview.id}/>
            ))}
            {/* <p>You haven&apos;t taken any interviews yet</p> */}
        </div>
        </section>

        <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an interview</h2> 

        <div className='interviews-section'>
            {dummyInterviews.map((interview) => (
                <InterviewCard {...interview} key ={interview.id}/>
            ))}
        </div>
        </section>
    </>

  )
}

export default Page