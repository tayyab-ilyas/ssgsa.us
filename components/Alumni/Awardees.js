import { useState } from "react"

const Awardees = () => {
  const [currentSession, setCurrentSession] = useState('2007-08')
  const awardees = [
    { session: '2007-08',
      awardees: [
        {'name': "Aadil Masood", 'field': "Cochin University of Science and Technology (CUAST), Kochi"},
        {'name': "Uzma Mansoori", 'field': "Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR), Bangalore"},
        {'name': "Dr. Asif Alvi", 'field': "Jawaharlal Nehru Medical College (JNMC), AMU, Aligarh"},
        {'name': "Mohammad Azam", 'field': "Inha University , Incheon , South Korea"},
        {'name': "Rihan Alvi", 'field': "Engineering, AMU"},
        {'name': "Asif Ashfaq Khan", 'field': "Dr. Y.S. Parmar University of Horticulture & Forestry, Himachal Predesh"},
        {'name': "Shah Kamran Ahmad", 'field': "Interdisciplinary Biotechnology Unit, A. M.U, Aligarh"},
        {'name': "Mohammed Danish", 'field': "National Prawn Laboratory, Al-Lith, Saudi Arabia"},
      ]
    },
    { session: '2008-09',
      awardees: [
        {'name': 'Beenish Zia', 'field': 'Engineering, AMU'},
        {'name': 'Khaliqur Rehman', 'field': 'JN Medical College, AMU'},
        {'name': 'Mohd. Moin', 'field': 'Interdisciplinary Biotechnology Unit, AMU'},
        {'name': 'Mohd Khan', 'field': 'Chemistry Department, AMU'},
        {'name': 'Savita Singh', 'field': 'Interdisciplinary Biotechnology Unit, AMU'},
        {'name': 'Shakir Khan', 'field': 'Interdisciplinary Biotechnology Unit AMU'},
        {'name': 'Zain Quadri', 'field': 'Interdisciplinary Biotechnology Unit, AMU'}
      ]
    },
    { session: '2009-10',
      awardees: [
        {'name': 'Ali Shoeb Moon', 'field': 'Engineering, AMU'},
        {'name': 'Fahad Ali Usmani', 'field': 'Engineering, AMU'},
        {'name': 'Maqsood Alam', 'field': 'Engineering, AMU'},
        {'name': 'Meraj Neyazi', 'field': 'Biotechnology, MKU'},
        {'name': 'Mohammad Asad', 'field': 'Biotechnology, MKU'},
        {'name': 'Mustafa Ali Khan', 'field': 'MCA, AMU'},
        {'name': 'Nuzhat Ahsan', 'field': 'Biotechnology, AMU'},
        {'name': 'Zaigham Rizvi', 'field': 'Biochemistry, AMU'}
      ]
    },
    { session: '2010-11',
      awardees: [
        {'name': 'Syed Murtuza Abbas', 'field': 'Engineering, AMU'},
        {'name': 'Abdullah Ahsan', 'field': 'Engineering, AMU'},
        {'name': 'Amena Arif', 'field': 'Biochemistry, AMU'},
        {'name': 'Musfira Jilani', 'field': 'Engineering, AMU'},
        {'name': 'Supriya Jindal', 'field': 'Biochemistry, AMU'},
        {'name': 'Najeeb P.K', 'field': 'Physics, AMU'},
        {'name': 'Sayeed ur Rehman', 'field': 'Biochemistry, AMU'},
        {'name': 'Asim Rizvi', 'field': 'Biotechnology, AMU'}
      ]
    },
    { session: '2011-12',
      awardees: [
        {'name': 'Amaj Ahmad Laskar', 'field': 'Biotechnology, AMU'},
        {'name': 'Hanadi Falki', 'field': 'English, AMU'},
        {'name': 'Husain Bin Qasim', 'field': 'Engineering, AMU'},
        {'name': 'Iffat Ali', 'field': 'Engineering, AMU'},
        {'name': 'Medha Sharma', 'field': 'Engineering, AMU'},
        {'name': 'Mohammad Nizam', 'field': 'Physics, AMU'},
        {'name': 'Nida Rahmani', 'field': 'Biochemistry, AMU'},
        {'name': 'Raghib Ashraf', 'field': 'Biotechnology, AMU'},
        {'name': 'Ruchi Dana', 'field': 'Medicine, AMU'},
        {'name': 'Sabiha Khatoon', 'field': 'Zoology, AMU'},
        {'name': 'Sadaf Ahmad', 'field': 'Agriculture, AMU'},
        {'name': 'Sameer Husain', 'field': 'Chemistry, AMU'},
        {'name': 'Sarfaraz Alam Khan', 'field': 'Engineering, AMU'},
        {'name': 'Syed Mohammad Faisal', 'field': 'Biotechnology, AMU'},
        {'name': 'Syed Shabih Hasan', 'field': 'Engineering, AMU'}
      ]
    },
    { session: '2012-13',
      awardees: [
        {'name': 'Tanweer Ahmad', 'field': 'Engineering, AMU'},
        {'name': 'Zaira Bano', 'field': 'Engineering, AMU'},
        {'name': 'Utkarsh Goel', 'field': 'Engineering, AMU'},
        {'name': 'Tanwee Kausar', 'field': 'Engineering, AMU'},
        {'name': 'Meesum Kazmi', 'field': 'MBA Interest, AMU'},
        {'name': 'Atif Zafar Khan', 'field': 'Biochemistry, AMU'},
        {'name': 'Sufia Khatoon', 'field': 'Engineering, AMU'},
        {'name': 'Abdul Hameed Kidwai', 'field': 'Arts, AMU'},
        {'name': 'Sajid Nadeem', 'field': 'Biochemistry, AMU'},
        {'name': 'Quamar Niaz', 'field': 'Engineering, AMU'},
        {'name': 'Qambar Hasan Rizvi', 'field': 'Biochemistry, AMU'},
        {'name': 'Haji Mohammad Saleem', 'field': 'Engineering, AMU'},
        {'name': 'Faizanuddin Siddiqui', 'field': 'Biotechnology'}
      ]
    },
    { session: '2013-14',
      awardees: [
        {'name': 'Minhal Abidi', 'field': 'Biochemistry, AMU'},
        {'name': 'Mahvash Afzal', 'field': 'Engineering, AMU'},
        {'name': 'Quazi Ahmad', 'field': 'Biotechnology, AMU'},
        {'name': 'Tooba Ahmad', 'field': 'Engineering, AMU'},
        {'name': 'Mohammad Anas', 'field': 'Engineering, AMU'},
        {'name': 'Anas Anis', 'field': 'Engineering, AMU'},
        {'name': 'Priyanka Gupta', 'field': 'Engineering, AMU'},
        {'name': 'Asad Habeeb', 'field': 'Engineering, AMU'},
        {'name': 'Mohd Kashif', 'field': 'Engineering, AMU'},
        {'name': 'Maaz Khan', 'field': 'Engineering, AMU'},
        {'name': 'Zeba Khanam', 'field': 'Engineering, AMU'},
        {'name': 'Rishabh Kumar', 'field': 'Engineering, AMU'},
        {'name': 'Ali Ahmad Mohdi', 'field': 'Engineering, AMU'},
        {'name': 'Ali Muzaffar', 'field': 'Engineering, AMU'},
        {'name': 'Mohsin Jahan Qazi', 'field': 'Chemistry, AMU'},
        {'name': 'Taru Saraswat', 'field': 'Engineering, AMU'},
        {'name': 'Mohammad Haris Shamsi', 'field': 'Engineering, AMU'},
        {'name': 'Mudasir Yatoo', 'field': 'Chemistry, AMU'},
        {'name': 'Mohd Zubair', 'field': 'Biotechnology, AMU'}
      ]
    },
    { session: '2014-15',
      awardees: [
        {'name': 'Atiur Rahman', 'field': 'Industrial Chemistry, AMU, IIT-G'},
        {'name': 'Farhat Perveen', 'field': 'Engineering, AMU'},
        {'name': 'Ishan Sharma', 'field': 'Engineering, AMU'},
        {'name': 'Kushagra Kumar', 'field': 'Engineering, AMU'},
        {'name': 'Lubna Maryam', 'field': 'Biotechnology, AMU'},
        {'name': 'Mariam Siddiqui', 'field': 'Engineering, AMU'},
        {'name': 'Mohammad Hussain Siddiqui', 'field': 'Management, AMU'},
        {'name': 'Nazia Parveen', 'field': 'Biochemistry, AMU'},
        {'name': 'Noor Fatima Zaidi', 'field': 'Engineering, AMU'},
        {'name': 'Safia Rahmat', 'field': 'Engineering, AMU'},
        {'name': 'Salman Kashif', 'field': 'Engineering, AMU'},
        {'name': 'Salman Sadullah Usmani', 'field': 'Biotechnology, AMU'},
        {'name': 'Saman Khan', 'field': 'Biochemistry, AMU'},
        {'name': 'Shujaut Badar', 'field': 'Engineering, AMU'},
        {'name': 'Vekar Husain Mir', 'field': 'Tata Institute of Social Sciences, Mumbai'},
        {'name': 'Wasikul Islam', 'field': 'Physics, AMU'}
      ]
    },
    { session: '2015-16',
      awardees: [
        {'name': 'Abhay Mittal', 'field': 'Engineering, AMU'},
        {'name': 'Abhishek Royal', 'field': 'Medicine, AMU'},
        {'name': 'Afzal Shadab', 'field': 'Engineering, AMU'},
        {'name': 'Ajaharul Islam', 'field': 'Physics, AMU'},
        {'name': 'Ayesha Bee', 'field': 'Physics, AMU'},
        {'name': 'Faiz Alam', 'field': 'Engineering, AMU'},
        {'name': 'Farooq Jafri', 'field': 'Geology, AMU'},
        {'name': 'Kashif', 'field': 'Engineering, AMU'},
        {'name': 'M Zulqarnain', 'field': 'Engineering, AMU'},
        {'name': 'Mehroosh', 'field': 'Physics, AMU'},
        {'name': 'Mohd Faraz', 'field': 'Engineering, AMU'},
        {'name': 'MR Wani', 'field': 'Zoology, AMU'},
        {'name': 'Rajat Kant Goel', 'field': 'Engineering, AMU'},
        {'name': 'Sajid Khan', 'field': 'Social Work'},
        {'name': 'Subia Akram', 'field': 'Biotechnology, AMU'},
        {'name': 'Tabia Ahmad', 'field': 'Engineering, AMU'},
        {'name': 'Tajuddin Khan', 'field': 'Economics, AMU'}
      ]
    },
    { session: '2016-17',
      awardees: [
        {'name': 'Abdullah Haroon', 'field': 'Engineering, AMU'},
        {'name': 'Abhinandan Jain', 'field': 'Engineering, AMU'},
        {'name': 'Abul Kamar', 'field': 'Economics, AMU'},
        {'name': 'Arman Hadi', 'field': 'Engineering, AMU'},
        {'name': 'Ayesha Zainab Beg', 'field': 'Biochemistry, AMU'},
        {'name': 'Fizza Askari', 'field': 'Biotechnology, AMU'},
        {'name': 'Haaris Ahsan Safdari', 'field': 'Biotechnology, AMU'},
        {'name': 'Hafijul Islam', 'field': 'Physics, AMU'},
        {'name': 'Harsh Gupta', 'field': 'Engineering, AMU'},
        {'name': 'Ishfaq Ibni Hashim', 'field': 'Chemistry, AMU'},
        {'name': 'Md Asif Belal Ansari', 'field': 'Law, AMU'},
        {'name': 'Mohd Danish Ansari', 'field': 'Engineering, AMU'},
        {'name': 'Nabeel Siddiqui', 'field': 'Zoology, AMU'},
        {'name': 'Sadia Tanweer', 'field': 'Chemistry, AMU'},
        {'name': 'Sahir Azmi', 'field': 'Engineering, AMU'},
        {'name': 'Sajad Ahmad Shiekh', 'field': 'Physics, AMU'},
        {'name': 'Sarmad Rizvi', 'field': 'Engineering, AMU'},
        {'name': 'Sharif Kidwai', 'field': 'Engineering, AMU'}
      ]
    },
    { session: '2017-18',
      awardees: [
        {'name': 'Abdullah Talib', 'field': 'Engineering, AMU'},
        {'name': 'Arpit Prashar', 'field': 'Biotechnology, AMU'},
        {'name': 'Ather Hassan Dar', 'field': 'Economics, AMU'},
        {'name': 'Azman Akhter', 'field': 'Zoology, AMU'},
        {'name': 'Bhanu Pandey', 'field': 'Engineering, AMU'},
        {'name': 'Hashir Ahmad', 'field': 'Engineering, AMU'},
        {'name': 'Md Mahafuzur Rahaman', 'field': 'Physics, AMU'},
        {'name': 'Mirat Ul Fatima', 'field': 'Biochemistry, AMU'},
        {'name': 'Mohammad Mukarram', 'field': 'Botany, AMU'},
        {'name': 'Mohd Ali Khan', 'field': ' Industrial Chemistry, AMU'},
        {'name': 'Mohd Rizwan', 'field': 'Geology, AMU'},
        {'name': 'Mohd Safullah Ansari', 'field': 'Zoology, AMU'},
        {'name': 'Mohd Toaha Umar', 'field': 'Engineering, AMU'},
        {'name': 'Parwez Ahmad', 'field': 'Engineering, AMU'},
        {'name': 'Sachin Gupta', 'field': 'Physics, AMU'},
        {'name': 'Sundus Chishti', 'field': 'Business Administration, AMU'},
        {'name': 'Vani Dayal Sharma', 'field': 'Engineering, AMU'},
        {'name': 'Vibhu Varshney', 'field': 'Engineering, AMU'},
        {'name': 'Vishal Varshney', 'field': 'Botany, AMU'},
        {'name': 'William Issac', 'field': 'Engineering, AMU'}
      ]
    },
    { session: '2018-19',
      awardees: [
        {'name': 'Arshia Sulaiman', 'field': 'Industrial Chemistry, AMU'},
        {'name': 'Atiya Usmani', 'field': 'Engineering, AMU'},
        {'name': 'Danish Abbas', 'field': 'Engineering, AMU'},
        {'name': 'Fasil Bashir Wani', 'field': 'Geology, AMU'},
        {'name': 'Gaurav Prakash', 'field': 'Chemistry, AMU'},
        {'name': 'Iqra Fatima', 'field': 'Psychology, AMU'},
        {'name': 'Junaid Akhter', 'field': 'Physics, AMU'},
        {'name': 'Madeeha Mohd Zubair', 'field': 'Physics, AMU'},
        {'name': 'Md Ful Hossain Sk', 'field': 'Physics, AMU'},
        {'name': 'Md Nadir Hassan', 'field': 'Biotechnology, AMU'},
        {'name': 'Mohammad Omar Khursheed', 'field': 'Engineering, AMU'},
        {'name': 'Mohd Saood Asmat', 'field': 'Commerce, AMU'},
        {'name': 'Mohd Umair Khan', 'field': 'Economics, AMU'},
        {'name': 'Monanshi Gupta', 'field': 'Engineering, AMU'},
        {'name': 'Muqtada Ali khan', 'field': 'Zoology, AMU'},
        {'name': 'Rifa Khan', 'field': 'Engineering, AMU'},
        {'name': 'Salman Hasan', 'field': 'Chemistry, AMU'},
        {'name': 'Sheeraz Athar', 'field': 'Engineering, AMU'},
        {'name': 'Shiva Agarwal', 'field': 'Physics, AMU'},
        {'name': 'Shivam Kumar Upadhyaya', 'field': 'Engineering, AMU'},
        {'name': 'Sidra Ghazali Rizvi', 'field': 'Biochemistry, AMU'},
        {'name': 'Syed Asnal Rizvi', 'field': 'Engineering, AMU'},
        {'name': 'Tushar Singhal', 'field': 'Engineering, AMU'},
        {'name': 'Umer Saleem Bhat', 'field': 'Biotechnology, AMU'},
        {'name': 'Vanshika Varshney', 'field': 'Engineering, AMU'},
        {'name': 'Vatsala', 'field': 'Engineering, AMU'},
        {'name': 'Zuhaib Akhtar', 'field': 'Engineering, AMU'}
      ]
    },
    { session: '2019-20',
      awardees: [
        {'name': 'Abdul Basit Khan', 'field': 'Zoology , AMU'},
        {'name': 'Abdul Hannan Faruq', 'field': 'Mechanical Engg. , AMU'},
        {'name': 'Abdul Sabur Kidwai', 'field': 'English , AMU'},
        {'name': 'Ahmad Faraz Badar', 'field': 'Mechanical Engg. , AMU'},
        {'name': 'Ali Asad', 'field': 'Mechanical Engg. , AMU'},
        {'name': 'Amna Jalali', 'field': 'Commerce , AMU'},
        {'name': 'Ankur Singh', 'field': 'Physics , AMU'},
        {'name': 'Arish', 'field': 'Industrial Chemistry , AMU'},
        {'name': 'Arpit Jadon', 'field': 'Electrical Engg. , AMU'},
        {'name': 'Firoz Khan', 'field': 'Physics, AMU'},
        {'name': 'Ghania Fatima', 'field': 'Electronics Engg. , AMU'},
        {'name': 'Jeelani Inaam Ul Haq', 'field': 'Geology , AMU'},
        {'name': 'Mahmood Akbar Life', 'field': 'Biochemistry , AMU'},
        {'name': 'Md Tabish Kamran', 'field': 'Education , AMU'},
        {'name': 'Mohammad Irfan', 'field': 'Physics , AMU'},
        {'name': 'Mohammad Waquar Uddin Siddiqui', 'field': 'Industrial Chemistry, AMU'},
        {'name': 'Mohd Aquib Siddiqui', 'field': 'Commerce , AMU'},
        {'name': 'Noma Ahmad', 'field': 'Computer Science , AMU'},
        {'name': 'Nuha Abeer Khan', 'field': 'Biotechnology , AMU'},
        {'name': 'Sameera Mujahid', 'field': 'Biotechnology , AMU'},
        {'name': 'Shazia Imam', 'field': 'Economics , AMU'},
        {'name': 'Sidra Fatima', 'field': 'English , AMU'},
        {'name': 'Syed Husain Mustafa', 'field': 'Computer Engg. , AMU'},
        {'name': 'Tezuesh Varshney', 'field': 'Computer Engg. , AMU'},
        {'name': 'Zeba Karin Ahmad', 'field': 'Electrical Engg. , AMU'}
      ]
    },
    { session: '2020-21',
      awardees: [
        {'name': 'Aijaz Nazir', 'field': 'Science / Mathematics'},
        {'name': 'Anam Hashmi', 'field': 'Engineering / Electronics'},
        {'name': 'Areesha Ali', 'field': 'Science / Physics'},
        {'name': 'Areesha Khan', 'field': 'Social Science / Development Studies'},
        {'name': 'Ariba Shahab', 'field': 'Science / Industrial Chemistry'},
        {'name': 'Azka Khanam', 'field': 'Engineering / Electronics'},
        {'name': 'Burhani Taher Saifuddin', 'field': 'Science / Physics'},
        {'name': 'Fatima Muzaffar', 'field': 'Law/Law'},
        {'name': 'Ifra Ilyas Ansari', 'field': 'Science / Chemistry'},
        {'name': 'Jaffar Ali Lone', 'field': 'Engineering / Electrical'},
        {'name': 'Javeria Maryam', 'field': 'Social Science / Economics'},
        {'name': 'Khan Saad Bin Hasan', 'field': 'Engineering / Computer'},
        {'name': 'Maaz Abdul Moiz', 'field': 'Engineering / Civil'},
        {'name': 'Mahvash Jafri', 'field': 'Commerce / Commerce'},
        {'name': 'Mariyam Abbas', 'field': 'Social Science / Psychology'},
        {'name': 'Md Abdullah Ansari', 'field': 'Engineering / Electrical'},
        {'name': 'Md Sohidul Islam', 'field': 'Life Science / Zoology'},
        {'name': 'Mohammad Hanzala', 'field': 'Engineering / Civil'},
        {'name': 'Mohd Azhar Hasan Ansari', 'field': 'Science / Chemistry'},
        {'name': 'Mohd Hozaifa Khan', 'field': 'Engineering / Computer'},
        {'name': 'Oroosa Anwar', 'field': 'Arts / English'},
        {'name': 'Pradeep Kumar', 'field': 'Engineering / Mechanical'},
        {'name': 'Rabia Omar', 'field': 'Sciences / Physics'},
        {'name': 'Tanuj Singhal', 'field': 'Engineering / Computer'},
        {'name': 'Wareesha Ali', 'field': 'Life Sciences / Biotechnology'},
        {'name': 'Waseem Ahmad', 'field': 'Engineering / Mechanical'},
        {'name': 'Yasha Taimuri', 'field': 'Life Science / Zoology'},
        {'name': 'Zainab Faiyaz', 'field': 'Life Science / Biotechnology'},
        {'name': 'Zanbaz Ahmed Khan', 'field': 'Social Science / Economics'},
        {'name': 'Zishan Hassan', 'field': 'Management / Business Administration'}
      ]
    },
    { session: '2021-22',
      awardees: [
        {'name': 'Aafiya', 'field': 'Physics'},
        {'name': 'Ayush Agrawal', 'field': 'Mechanical Engineering'},
        {'name': 'Sehrish Akhtar', 'field': 'Physics'},
        {'name': 'Sehrish Akhtar', 'field': 'Physics'},
        {'name': 'Danish Alam', 'field': 'Physics'},
        {'name': 'Danish Alam', 'field': 'Physics'},
        {'name': 'Ayesha Nasir Alavi', 'field': 'Law'},
        {'name': 'Mohammad Anas', 'field': 'Computer Engineering'},
        {'name': 'Bushra Ansari', 'field': 'Biochemistry'},
        {'name': 'Mohd Mushfique Javed Ansari', 'field': 'Architecture'},
        {'name': 'Samina Irshad Ansari', 'field': 'Psychology'},
        {'name': 'Heena Aslam', 'field': 'Electrical Engineering'},
        {'name': 'Mohd Abdul', 'field': 'Baseer Physics'},
        {'name': 'Mohammad Fahad', 'field': 'Electrical Engineering'},
        {'name': 'Aquib Faraz', 'field': 'Commerce'},
        {'name': 'Ifrah Farid', 'field': 'Biochemistry'},
        {'name': 'Harshul Gupta', 'field': 'Physics'},
        {'name': 'Arsalan Hameed', 'field': 'Computer Engineering'},
        {'name': 'Saman Jafri', 'field': 'Biotechnology'},
        {'name': 'Faisal Jamal', 'field': 'Biochemistry'},
        {'name': 'Faraha Javed', 'field': 'Medicine'},
        {'name': 'Shahrukh Khan', 'field': 'Electrical Engineering'},
        {'name': 'Tayyibah Khanam', 'field': 'Electrical Engineering'},
        {'name': 'Yusra Meraj Electronics', 'field': 'Engineering'},
        {'name': 'Madiha Noman', 'field': 'English'},
        {'name': 'Kunwar Mohammed Saaim', 'field': 'Computer Engineering'},
        {'name': 'Saba Sarwar', 'field': 'Computer Science'},
        {'name': 'Md. Showgat Jahan Shourave', 'field': 'Economics'},
        {'name': 'Mohd Talha', 'field': 'Physics'},
        {'name': 'Amber Tanweer', 'field': 'Law'}
      ]
    }
  ]

  return (
    <div id="Awardees">
      <h1 className="my-8 mx-4 sm:mx-12 lg:mx-20 bg-blue-850 lg:text-3xl text-2xl text-white text-center font-extrabold py-2 rounded-tl-3xl rounded-br-3xl">
        Awardees
      </h1>
      <div
        className="flex flex-wrap justify-around my-8 mx-8 sm:mx-16 lg:mx-24 bg-gray-200"
        style={{ fontFamily: 'Lora' }}
      >
        {awardees.map((session, index) => (
          <h3
            className={`text-red-850 ${currentSession == session.session ? "bg-blue-850": ""} font-bold w-32 text-center text-xl px-4 py-2 cursor-pointer`}
            onClick={() => setCurrentSession(session.session)}
            key={index}
          >
            {session.session}
          </h3>
        ))}
      </div>
      <div className=" my-8 mx-8 sm:mx-16 lg:mx-24">
        {awardees.map((session, index) => (
          <table
            className="w-full"
            hidden={currentSession != session.session}
            key={index}
          >
            <tbody>
              {session.awardees.map((awardee, ind) => (
                <tr key={ind}>
                  <td className="bg-gray-200 text-blue-850 font-bold p-2 w-2/5">
                    {awardee.name}
                  </td>
                  <td className="p-2 w-3/5">
                    {awardee.field}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  )
}

export default Awardees
