
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
      school: 'Chinese Academy of Science,Institute of Computint Technology',
      major: 'Computer Tecnology',
      logo: 'college',
      start: '2025.9',
      end: '2029.7(expected)'
    },
    {
      school: 'Jilin Uiversity',
      major: 'Software Engineering',
      logo: 'college',
      start: '2021.9',
      end: '2025.7'
    },
  ]