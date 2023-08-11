import Image from 'next/image'

export default function PersonalImage() {
  return (
<Image src={"/akinabudu.jpg"} alt={"akinabudu"} style={{objectFit:"cover"}}  width={100} height={200}  quality={100}
 className="w-20 h-20 hover:border hover:border-white/50 rounded-full"/>  )
}
