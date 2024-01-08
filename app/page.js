import Image from 'next/image'
import Weather from './pages/weather'


export default function Home() {
  return (
    <div className='flex justify-center flex-col gap-8'>
      <Weather/>
    </div>
  )
}
