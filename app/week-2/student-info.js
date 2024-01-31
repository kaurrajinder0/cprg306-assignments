import Link from 'next/link';
const StudentInfo = () =>{
    const yourName = "Rajinder Kaur"; 
    const githubRepository = "https://github.com/kaurrajinder0";

    return (
        <div>
            <p>{yourName}</p>
            <Link href={githubRepository}>
            https://github.com/kaurrajinder0
            </Link>
        </div>
    );
};

export default StudentInfo;