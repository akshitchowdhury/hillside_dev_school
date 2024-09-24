import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import SchoolAdminHero from './SchoolAdminHero';
import NavUni from '../Nav/NavUni';
import SchoolAdminText from './SchoolAdminText';

export default function SchoolAdmin() {
  const adminData = [
    {
      name: 'Mrs. Vidya Sriraman',
      title: 'Dean',
      image: 'https://ihs.edu.in/wp-content/uploads/2023/06/vice-principal.jpg',
      description: [
        'Mrs. Vidya Sriraman holds an M.Sc in Biochemistry from Haffkine Institute, Mumbai. She began her teaching career in 1984, and joined PET in 1993.',
        'From the start, Mrs. Sriraman has been passionate about sustainability, and worked closely with Alternative Industries Development to install a paper recycling unit at the school.',
        'In 2011, Mrs. Vidya Sriraman took on the role of Vice-Principal at Progressive Educational Trust (PET) and played a pivotal role in introducing the IGCSE curriculum. As the schools first IGCSE Coordinator, she spearheaded staff training workshops and established collaborative IG partner programs with other schools.',
        'Since 2015, Mrs. Sriraman has been serving as Dean, where she facilitates the seamless transfer of pedagogical best practices and leads all experiential learning initiatives. A strong proponent of integrating technology into education, she recognizes the transformative impact of technology on how we live and learn. Mrs. Sriraman is dedicated to ensuring that both students and teachers develop essential 21st-century skills.',
      ],
    },
    {
      name: 'Mrs. Neha Sharma',
      title: 'Principal',
      image: 'https://ihs.edu.in/wp-content/uploads/2019/08/dean-v3.jpg',
      description: [
        "Mrs. Neha Sharma began her career as a preschool teacher at Progressive Educational Trust in 1998. She holds a Master's degree in Economics and teaching certification from Cambridge University. Over the years, Mrs. Sharma has taught classes at all levels, and continues to teach High school IGCSE Economics. She has also held positions that provided her with deep insights into staff- as well as student-related concerns and outlooks.",
      ],
    },
    {
      name: 'Ms. Suman Bolar',
      title: 'School Administrator',
      image: 'https://ihs.edu.in/wp-content/uploads/2019/08/suman-bolar.jpg',
      description: [
        'Ms. Suman Bolar is a founding trustee of the Bolar Education Trust, which runs PET. Ms. Bolar graduated from St. Joseph\'s College of Commerce in 1991, and embarked on a corporate writing career that has spanned close to 30 years.',
        "She thinks of herself as an eternal learner, believing that a person's ability to grow and evolve defines their success.",
      ],
    },
  ];

  return (
    <>
    <NavUni />
    <SchoolAdminHero />
    <SchoolAdminText/>
    <div className="container mx-auto px-4 py-8">
      {/* Top Section for Dean with image on the right */}
      <div className="mb-8">
        <Card className="flex flex-col md:flex-row h-full rounded-none overflow-hidden">
          <CardContent className="flex-grow p-6 md:w-1/2">
            <Typography variant="h5" component="h2" className="font-bold text-gray-800 mb-2">
              {adminData[0].name}
            </Typography>
            <Typography variant="subtitle1" className="text-gray-600 mb-4">
              {adminData[0].title}
            </Typography>
            {adminData[0].description.map((paragraph, idx) => (
              <Typography key={idx} variant="body2" className="text-gray-700 text-justify leading-relaxed mb-4">
                {paragraph}
              </Typography>
            ))}
          </CardContent>
          <CardMedia
            component="img"
            height="400" // Increase this value for larger image height
            image={adminData[0].image}
            alt={adminData[0].name}
            className="md:w-1/2 h-72 max-w-xl md:h-auto object-contain" // Adjust height classes here as needed
          />
        </Card>
      </div>
      <h1 className="h-[1px] bg-gray-800 w-full my-4"></h1>
      {/* Bottom Section for Principal and Administrator */}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {adminData.slice(1).map((admin, index) => (
          <Card key={index} className="flex flex-col h-full shadow-lg rounded-none overflow-hidden">
            <CardMedia
              component="img"
              height="400" // Increase this value for larger image height
              image={admin.image}
              alt={admin.name}
              className="w-full md:h-[350px] h-72 object-contain" // Adjust height classes here as needed
            />
            <CardContent className="flex-grow p-6">
              <Typography variant="h5" component="h2" className="font-bold text-gray-800 mb-2">
                {admin.name}
              </Typography>
              <Typography variant="subtitle1" className="text-gray-600 mb-4">
                {admin.title}
              </Typography>
              {admin.description.map((paragraph, idx) => (
                <Typography key={idx} variant="body2" className="text-gray-700 mb-4">
                  {paragraph}
                </Typography>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
      
    </div>
    </>
  );
}
