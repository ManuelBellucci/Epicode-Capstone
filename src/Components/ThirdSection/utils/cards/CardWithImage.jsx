import Readmore from './Readmore'
import Tag from './Tag'

const CardWithImage = ({ tagText, title, src }) => {
  return (
    <div className='flex flex-col p-6 items-start gap-6 border border-white rounded w-full'>

      <img src={src} alt={src} className='self-center object-cover rounded' />

      <div className='flex flex-col items-start gap-5 py-6'>
        <Tag tagText={tagText} />
        <h3 className='text-2xl font-bold'>{title}</h3>
        <div className='flex gap-2 items-center'>
          <Readmore />
        </div>
      </div>
    </div>
  )
}

export default CardWithImage
