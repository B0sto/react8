import SectionElement from '../../atoms/SectionElement/SectionElement'

const Section = () => {
  return (
    <div className='sectionContainer'>
      <SectionElement sectionName='Home Section'/>
      <SectionElement sectionName='About Section'/>
      <SectionElement sectionName='Services Section'/>
    </div>
  )
}

export default Section