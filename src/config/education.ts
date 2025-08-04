
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Institute of Computing Technology,Chinese Academy of Science',
      major: 'Computer Tecnology',
      logo: 'college',
      start: '2025.9',
      end: '2028.7(expected)'
    },
    {
      school: 'Jilin Uiversity',
      major: 'Software Engineering',
      logo: 'college',
      start: '2021.9',
      end: '2025.7'
    },
  ]