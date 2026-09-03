import SSK from '../assets/images/Teachers/SirShahzaibKhan.jpg'
import HMZ from '../assets/images/Teachers/CSBYHMZ.jpg'
import missNawal from '../assets/images/Teachers/MissNawalKhurram.jpg'
import sirAdeel from '../assets/images/Teachers/SirAdeelPaperwala.jpg'
import sirAli from '../assets/images/Teachers/SirAliRaza.jpg'
import sirAwais from '../assets/images/Teachers/SirAwaisSyed.jpg'
import sirAyaz from '../assets/images/Teachers/SirAyazRao.jpg'
import sirBilal from '../assets/images/Teachers/SirBilalBashir.jpg'
import sirCyrus from '../assets/images/Teachers/SirCyrus.jpg'
import sirFahadAli from '../assets/images/Teachers/SirFahadAli.jpg'
import sirFahadMunaf from '../assets/images/Teachers/SirfahadMunaf.jpg'
import sirHamza from '../assets/images/Teachers/SirHamzaAli.jpg'
import sirMaaz from '../assets/images/Teachers/SirMaazAhmed.jpg'
import sirKamran from '../assets/images/Teachers/SirKamranShakir.jpg'
import sirHassan from '../assets/images/Teachers/SirHassanYousuf.jpg'
import sirHarisJ from '../assets/images/Teachers/SirHarisJabbar.jpg'
import sirMahad from '../assets/images/Teachers/SirMahadAmer.jpg'
import sirMoiz from '../assets/images/Teachers/SirMoizKali.jpg'
import sirMurad from '../assets/images/Teachers/SirMuradSesodia.jpg'
import sirRizwan from '../assets/images/Teachers/SirRizwanHaider.jpg'
import sirSohail from '../assets/images/Teachers/SirSohailAhmed.jpg'
import sirSuhail from '../assets/images/Teachers/SirSuhailAziz.jpg'
import sirGhazi from '../assets/images/Teachers/SirGhazi.jpg'
import sirUmair from '../assets/images/Teachers/SirUmairAhmed.jpg'
import sirUmer from '../assets/images/Teachers/SirUmerSoni.jpg'
import sirWaqas from '../assets/images/Teachers/SirWaqasAshraf.jpg'
import SWK from '../assets/images/Teachers/SirWaqasKhan.jpg'
import missLaiba from '../assets/images/Teachers/MissLaiba.jpg'

export const teachers = [
    {
        id: 1,
        name: "Sir Hamza Ali",
        image: sirHamza,
        subject: "PST",
        levels: ["All","O Level", "IGCSE"],
        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon & Wed",
                    time: "9:00 PM - 10:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon & Wed",
                    time: "9:00 PM - 10:00 PM",
                },
            },

            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon & Wed",
                    time: "8:00 PM - 9:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Past Paper Practice",
        ],

        rating: 4.8,
        totalReviews: 210,
        available: true,
    },

    {
        id: 2,
        name: "Sir Waqas Ashraf",
        image: sirWaqas,
        subject: "PST",
        levels: ["All","O Level", "IGCSE"],
        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tue & Thu",
                    time: "8:00 PM - 9:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tue & Thu",
                    time: "8:00 PM - 9:00 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tue & Thu",
                    time: "8:00 PM - 9:00 PM",
                },
            }
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Past Paper Practice",
        ],

        rating: 4.8,
        totalReviews: 175,
        available: true,
    },

    {
        id: 3,
        name: "Sir Hassan Yousuf Qadri",
        image: sirHassan,
        subject: "PST",
        levels: ["All","O Level", "IGCSE"],
        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tue, Thu & Sat",
                    time: "9:00 PM - 10:30 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tue, Thu & Sat",
                    time: "9:00 PM - 10:30 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tue, Thu & Sat",
                    time: "9:00 PM - 10:30 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Past Paper Practice",
        ],

        rating: 4.9,
        totalReviews: 230,
        available: true,
    },

    {
        id: 4,
        name: "Sir Umair Ahmed",
        image: sirUmair,
        subject: "Islamiyat",
        levels: ["All","O Level", "IGCSE"],
        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Wed & Fri",
                    time: "8:00 PM - 9:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Wed & Fri",
                    time: "8:00 PM - 9:00 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Wed & Fri",
                    time: "8:00 PM - 9:00 PM",
                },
            }
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.7,
        totalReviews: 185,
        available: true,
    },

    {
        id: 5,
        name: "Sir Moiz Kali",
        image: sirMoiz,
        subject: "Urdu",
        levels: ["All","O Level"],
        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon & Wed",
                    time: "8:00 PM - 9:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon & Wed",
                    time: "8:00 PM - 9:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Past Paper Practice",
        ],

        rating: 4.8,
        totalReviews: 250,
        available: true,
    },

    {
        id: 6,
        name: "Sir Rizwan Haider",
        image: sirRizwan,
        subject: "Urdu",
        levels: ["O Level", "IGCSE"],
        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon & Wed",
                    time: "10:00 PM - 11:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon & Wed",
                    time: "10:00 PM - 11:00 PM",
                },
            },

            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon, Tue & Wed",
                    time: "10:00 PM - 11:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Past Paper Practice",
        ],

        rating: 4.8,
        totalReviews: 195,
        available: true,
    },

    {
        id: 7,
        name: "Sir Mahad Amer",
        image: sirMahad,
        subject: "Physics",

        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],

        pricing: {
            "All": {
                monthlyFee: 6500,
                schedule: {
                    days: "Fri: 9:00 PM - 10:00 PM",
                    time: "Sat & Sun: 3:00 PM - 4:00 PM",
                },
            },

            "O Level": {
                monthlyFee: 6500,
                schedule: {
                    days: "Fri: 9:00 PM - 10:00 PM",
                    time: "Sat & Sun: 3:00 PM - 4:00 PM",
                },
            },

            "IGCSE": {
                monthlyFee: 6500,
                schedule: {
                    days: "Fri: 9:00 PM - 10:00 PM",
                    time: "Sat & Sun: 3:00 PM - 4:00 PM",
                },
            },

            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Fri: 10:00 PM - 11:00 PM",
                    time: "Sat & Sun: 4:00 PM - 5:00 PM",
                },
            },

            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Sat & Sun",
                    time: "6:00 PM - 7:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Past Paper Practice",
        ],

        rating: 4.8,
        totalReviews: 286,
        available: true,
    },

    {
        id: 8,
        name: "Sir Fahad",
        image: sirFahadAli,
        subject: "Physics",

        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],

        pricing: {
            "All": {
                monthlyFee: 6500,
                schedule: {
                    days: "Tue & Thu",
                    time: "7:00 PM - 8:00 PM",
                },
            },

            "O Level": {
                monthlyFee: 6500,
                schedule: {
                    days: "Tue & Thu",
                    time: "7:00 PM - 8:00 PM",
                },
            },

            "IGCSE": {
                monthlyFee: 6500,
                schedule: {
                    days: "Tue & Thu",
                    time: "7:00 PM - 8:00 PM",
                },
            },

            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Tue & Thu",
                    time: "8:00 PM - 9:00 PM",
                },
            },

            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Tue & Thu",
                    time: "9:00 PM - 10:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.8,
        totalReviews: 324,
        available: true,
    },

    {
        id: 9,
        name: "Sir Cyrus",
        image: sirCyrus,
        subject: "Physics",

        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],

        pricing: {
            "All": {
                monthlyFee: 6500,
                schedule: {
                    days: "Mon & Thurs",
                    time: "5:00 PM - 6:00 PM",
                },
            },

            "O Level": {
                monthlyFee: 6500,
                schedule: {
                    days: "Mon & Thurs",
                    time: "5:00 PM - 6:00 PM",
                },
            },

            "IGCSE": {
                monthlyFee: 6500,
                schedule: {
                    days: "Mon & Thurs",
                    time: "5:00 PM - 6:00 PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Mon & Thurs",
                    time: "4:00 PM - 5:00 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Mon & Thurs",
                    time: "5:00 PM - 6:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.8,
        totalReviews: 198,
        available: true,
    },

    {
        id: 10,
        name: "Sir Waqas Khan",
        image: SWK,
        subject: "Mathematics",

        levels: ["All","O Level", "AS Level"],

        pricing: {
            "All": {
                monthlyFee: 8000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "6:30 PM - 7:30 PM",
                },
            },
            "O Level": {
                monthlyFee: 8000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "6:30 PM - 7:30 PM",
                },
            },
            "AS Level": {
                monthlyFee: 10000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "7:30 PM - 8:30 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Past Paper Practice",
        ],

        rating: 4.8,
        totalReviews: 175,
        available: true,
    },

    {
        id: 11,
        name: "Sir Murad Sesodia",
        image: sirMurad,
        subject: "Mathematics",

        levels: ["All","O Level", "AS Level", "A2 Level"],

        pricing: {
            "All": {
                monthlyFee: 6500,
                schedule: {
                    days: "Mon & Wed",
                    time: "10:00 PM - 11:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6500,
                schedule: {
                    days: "Mon & Wed",
                    time: "10:00 PM - 11:00 PM",
                },
            },
            "AS Level": {
                monthlyFee: 8000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "10:00 PM - 11:00 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 9000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "11:00 PM - 12:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.8,
        totalReviews: 190,
        available: true,
    }, 

    {
        id: 12,
        name: "Sir Ayaz Rao",
        image: sirAyaz,
        subject: "Mathematics",

        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],

        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Fri & Sat",
                    time: "9:00 PM - 10:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Fri & Sat",
                    time: "9:00 PM - 10:00 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Fri & Sat",
                    time: "9:00 PM - 10:00 PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Mon & Wed",
                    time: "8:00 PM - 9:00 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Mon & Wed",
                    time: "9:00 PM - 10:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.8,
        totalReviews: 190,
        available: true,
    },

    {
        id: 13,
        name: "Sir Ghazi Hassan",
        image: sirGhazi,
        subject: "Chemistry",

        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],

        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "8:00 PM - 9:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "8:00 PM - 9:00 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "8:00 PM - 9:00 PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "7:00 PM - 8:00 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Tues & Thurs",
                    time: "8:00 PM - 10:00 PM",
                },
            },

        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.8,
        totalReviews: 185,
        available: true,
    },

    {
        id: 14,
        name: "Sir Kamran Shakir",
        image: sirKamran,
        subject: "Chemistry",

        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],

        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "6:00 PM - 7:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "6:00 PM - 7:00 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "6:00 PM - 7:00 PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "8:20 PM - 9:30 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Tues & Thurs",
                    time: "7:00 PM - 8:00 PM",
                },
            },

        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.8,
        totalReviews: 185,
        available: true,
    },

    {
        id: 15,
        name: "Sir Suhail Aziz",
        image: sirSuhail,
        subject: "Chemistry",

        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],

        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Fri & Sat",
                    time: "6:00 PM - 7:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Fri & Sat",
                    time: "6:00 PM - 7:00 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Fri & Sat",
                    time: "6:00 PM - 7:00 PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Fri & Sat",
                    time: "7:00 PM - 8:00 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Fri & Sat",
                    time: "8:00 PM - 9:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.8,
        totalReviews: 185,
        available: true,
    },

    {
        id: 16,
        name: "Sir Awais Syed",
        image: sirAwais,
        subject: "Chemistry",

        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],

        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues & Thur 9:45 - 10:30PM",
                    time: "Sat & Sun 6:00 - 7:00PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues & Thur 9:45 - 10:30PM",
                    time: "Sat & Sun 6:00 - 7:00PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues & Thur 9:45 - 10:30PM",
                    time: "Sat & Sun 6:00 - 7:00PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Mon & Wed",
                    time: "6:00 PM - 7:00 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Mon & Wed",
                    time: "8:00 PM - 9:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.8,
        totalReviews: 185,
        available: true,
    },

    {
        id: 17,
        name: "Sir Awais Syed",
        image: sirAwais,
        subject: "Biology",

        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],

        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues & Thur 9:00 - 9:45PM",
                    time: "Sat & Sun 7:00 - 8:00PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues & Thur 9:00 - 9:45PM",
                    time: "Sat & Sun 7:00 - 8:00PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues & Thur 9:00 - 9:45PM",
                    time: "Sat & Sun 7:00 - 8:00PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "7:00 PM - 8:00 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Tues & Thurs",
                    time: "6:00 PM - 7:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.8,
        totalReviews: 185,
        available: true,
    },

    {
        id: 18,
        name: "Sir Umer Soni",
        image: sirUmer,
        subject: "Biology",

        levels: ["All","O Level", "IGCSE"],

        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Monday & Wednesday",
                    time: "10:00 PM - 11:15 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Monday & Wednesday",
                    time: "10:00 PM - 11:15 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Monday & Wednesday",
                    time: "10:00 PM - 11:15 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.8,
        totalReviews: 165,
        available: true,
    },

    {
        id: 19,
        name: "Sir Haris Jabbar",
        image: sirHarisJ,
        subject: "Biology",

        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],

        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Saturday & Sunday",
                    time: "1:00 PM - 2:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Sat & Sun",
                    time: "1:00 PM - 2:00 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Sat & Sun",
                    time: "1:00 PM - 2:00 PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Sat & Sun",
                    time: "2:00 PM - 3:00 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Sat & Sun",
                    time: "3:00 PM - 4:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.8,
        totalReviews: 210,
        available: true,
    },

    {
        id: 20,
        name: "Sir Muhammad Hamza",
        image: HMZ,
        subject: "Computer Science",

        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],

        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "7:00 to 8:00PM",
                },
            },

            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "7:00 to 8:00PM",
                },
            },

            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "7:00 to 8:00PM",
                },
            },

            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "8:00 to 9:00PM",
                },
            },

            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "9:00 to 10:00PM",
                },
            },
        },

        features: [
            "Live Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.9,
        totalReviews: 412,
        available: true,
    },

    {
        id: 21,
        name: "Sir Maaz Ahmed",
        image: sirMaaz,
        subject: "Computer Science",

        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],

        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "8:00 PM - 9:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 10000,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "8:00 PM - 9:00 PM",
                },
            },

            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "8:00 PM - 9:00 PM",
                },
            },

            "AS Level": {
                monthlyFee: 13000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "6:00 PM - 7:00 PM",
                },
            },

            "A2 Level": {
                monthlyFee: 15000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "7:00 PM - 8:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.9,
        totalReviews: 412,
        available: true,
    },

    {
        id: 22,
        name: "Sir Shahzaib Khan",
        image: SSK,
        subject: "English",

        levels: ["All", "O Level", "IGCSE"],

        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues 8:00 PM - 9:00 PM",
                    time: "Fri 9:00 PM - 10:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues 8:00 PM - 9:00 PM",
                    time: "Fri 9:00 PM - 10:00 PM",
                },
            },

            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues 8:00 PM - 9:00 PM",
                    time: "Fri 9:00 PM - 10:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.9,
        totalReviews: 412,
        available: true,
    },

    {
        id: 23,
        name: "Miss Nawal Khurram",
        image: missNawal,
        subject: "English",

        levels: ["All", "O Level"],

        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues 8:00 PM - 9:00 PM",
                    time: "Fri 9:00 PM - 10:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Tues 8:00 PM - 9:00 PM",
                    time: "Fri 9:00 PM - 10:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Weekly Tests",
        ],

        rating: 4.9,
        totalReviews: 412,
        available: true,
    },

    {
        id: 24,
        name: "Sir Sohail Ahmed",
        image: sirSohail,
        subject: "Business",
        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],
        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon & Wed",
                    time: "8:00 PM - 9:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon & Wed",
                    time: "8:00 PM - 9:00 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon & Wed",
                    time: "8:00 PM - 9:00 PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Mon & Wed",
                    time: "9:00 PM - 10:00 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Mon & Wed",
                    time: "10:00 PM - 11:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Past Paper Practice",
        ],

        rating: 4.9,
        totalReviews: 301,
        available: true,
    },

    {
        id: 25,
        name: "Sir Ali Raza",
        image: sirAli,
        subject: "Accounting",
        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],
        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon & Wed",
                    time: "10:00 PM - 11:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon & Wed",
                    time: "10:00 PM - 11:00 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon & Wed",
                    time: "10:00 PM - 11:00 PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Tues & Thurs",
                    time: "9:30 PM - 10:30 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Tues & Thurs",
                    time: "10:30 PM - 11:30 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Past Paper Practice",
        ],

        rating: 4.9,
        totalReviews: 301,
        available: true,
    },

    {
        id: 26,
        name: "Sir Adeel Paperwala",
        image: sirAdeel,
        subject: "Accounting",
        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],
        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Fri & Sat",
                    time: "6:00 PM - 7:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Fri & Sat",
                    time: "6:00 PM - 7:00 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Fri & Sat",
                    time: "6:00 PM - 7:00 PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Fri & Sat",
                    time: "7:00 PM - 8:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Past Paper Practice",
        ],

        rating: 4.9,
        totalReviews: 301,
        available: true,
    },

    {
        id: 27,
        name: "Sir Bilal Bashir",
        image: sirBilal,
        subject: "Economics",
        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],
        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Wed 10:00PM - 11:00PM",
                    time: "Sat 2:00 PM - 3:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Wed 10:00PM - 11:00PM",
                    time: "Sat 2:00 PM - 3:00 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Wed 10:00PM - 11:00PM",
                    time: "Sat 2:00 PM - 3:00 PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Wed 6:00PM - 7:00PM",
                    time: "Sat 1:00 PM - 2:00 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Wed 7:00PM - 8:00PM",
                    time: "Sat 3:00 PM - 4:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Past Paper Practice",
        ],

        rating: 4.9,
        totalReviews: 301,
        available: true,
    },

    {
        id: 28,
        name: "Sir Fahad Munaf",
        image: sirFahadMunaf,
        subject: "Economics",
        levels: ["All","O Level", "IGCSE", "AS Level", "A2 Level"],
        pricing: {
            "All": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "9:00 PM - 10:00 PM",
                },
            },
            "O Level": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "9:00 PM - 10:00 PM",
                },
            },
            "IGCSE": {
                monthlyFee: 6000,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "9:00 PM - 10:00 PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "10:00 PM - 11:00 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Tue & Thu",
                    time: "10:00 PM - 11:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Past Paper Practice",
        ],

        rating: 4.9,
        totalReviews: 300,
        available: true,
    },

    {
        id: 29,
        name: "Miss Laiba",
        image: missLaiba,
        subject: "Psychology",
        levels: ["All", "AS Level", "A2 Level"],
        pricing: {
            "All": {
                monthlyFee: 7000,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "10:00 PM - 11:00 PM",
                },
            },
            "AS Level": {
                monthlyFee: 7000,
                schedule: {
                    days: "Mon, Wed & Fri",
                    time: "10:00 PM - 11:00 PM",
                },
            },
            "A2 Level": {
                monthlyFee: 7500,
                schedule: {
                    days: "Tue & Thu",
                    time: "10:00 PM - 11:00 PM",
                },
            },
        },

        features: [
            "Live Zoom Classes",
            "Recorded Lectures",
            "PDF Notes",
            "Past Paper Practice",
        ],

        rating: 4.3,
        totalReviews: 200,
        available: true,
    },

];