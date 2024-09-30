import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import SchoolAdminHero from './SchoolAdminHero';
import NavUni from '../Nav/NavUni';
import SchoolAdminText from './SchoolAdminText';

export default function SchoolAdmin() {
  const adminData = [
    {
      name: 'Smt. S. N. Chandramma',
      title: 'Member – Progressive Education Society ®',
      image: 'https://ihs.edu.in/wp-content/uploads/2023/06/vice-principal.jpg', // Keep the same image
      description: [
        'Smt. S. N. Chandramma is a compassionate leader and a visionary dedicated to the well-being of children. With a deep sense of social responsibility and commitment to service, she has played a pivotal role in establishing and nurturing Bethel English High School.',
      ],
    },
    {
      name: 'Dr. Sukumar',
      title: 'Member – Progressive Education Society ®',
      image: 'https://ihs.edu.in/wp-content/uploads/2019/08/dean-v3.jpg', // Keep the same image
      description: [
        'Dr. Sukumar is a respected member of the Progressive Education Society, actively contributing to the growth and development of the institution through his invaluable insights and expertise.',
      ],
    },
    {
      name: 'Dr. S. B. Pushpa',
      title: 'Member – Progressive Education Society ®',
      image: 'https://ihs.edu.in/wp-content/uploads/2019/08/suman-bolar.jpg', // Keep the same image
      description: [
        'Dr. S. B. Pushpa graduated with an MBBS and MD from Bangalore Medical College (BMC). She worked as a Medical Officer at Victoria Hospital and is currently a consultant in the Department of Anesthesia and Pain Management at North Hampton General Hospital, UK.',
      ],
    },
    {
      name: 'Dr. Dinesh',
      title: 'Member – Progressive Education Society ®',
      image: 'https://ihs.edu.in/wp-content/uploads/2019/08/suman-bolar.jpg', // Keep the same image
      description: [
        'Dr. Dinesh is a dedicated member of the Progressive Education Society, contributing significantly to the society’s goals of providing quality education and fostering development.',
      ],
    },
  ];

  return (
    <>
      <NavUni />
      <SchoolAdminHero />
      <SchoolAdminText />
      <div className="container mx-auto px-4 py-8">
        {/* Top Section for Smt. S. N. Chandramma with image on the right */}
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
              height="400"
              image={adminData[0].image}
              alt={adminData[0].name}
              className="md:w-1/2 h-72 max-w-xl md:h-auto object-contain"
            />
          </Card>
        </div>
        <h1 className="h-[1px] bg-gray-800 w-full my-4"></h1>
        {/* Bottom Section for other members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {adminData.slice(1).map((admin, index) => (
            <Card key={index} className="flex flex-col h-full shadow-lg rounded-none overflow-hidden">
              <CardMedia
                component="img"
                height="400"
                image={admin.image}
                alt={admin.name}
                className="w-full md:h-[350px] h-72 object-contain"
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
