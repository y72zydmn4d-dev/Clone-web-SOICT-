import type { Person } from "./types";

const rows = [
  [
    "Prof. Dr. Nguyen Duc Minh",
    "Dean & Professor",
    "Computer Science",
    "Artificial Intelligence, Machine Learning",
    "nguyen-duc-minh.jpg",
  ],
  [
    "Assoc. Prof. Tran Thu Ha",
    "Vice Dean",
    "Information Systems",
    "Data Science, Digital Transformation",
    "tran-thu-ha.jpg",
  ],
  [
    "Dr. Le Quang Huy",
    "Head of Research",
    "Computer Science",
    "Computer Vision, Robotics",
    "le-quang-huy.jpg",
  ],
  [
    "Dr. Pham Bao Ngoc",
    "Senior Lecturer",
    "Software Engineering",
    "Software Architecture, DevOps",
    "pham-bao-ngoc.jpg",
  ],
  [
    "Dr. Vu Minh Chau",
    "Lecturer",
    "Information Systems",
    "Human-Computer Interaction, UX",
    "vu-minh-chau.jpg",
  ],
  [
    "Dr. Nguyen Thanh Son",
    "Lecturer",
    "Computer Science",
    "Natural Language Processing, AI",
    "nguyen-thanh-son.jpg",
  ],
  [
    "Dr. Bui Mai Anh",
    "Lecturer",
    "Cybersecurity",
    "Security, Privacy, Cryptography",
    "bui-mai-anh.jpg",
  ],
  [
    "Dr. Do Gia Khanh",
    "Lecturer",
    "Data Science",
    "Data Mining, Knowledge Graphs",
    "do-gia-khanh.jpg",
  ],
  [
    "Dr. Hoang Linh Chi",
    "Lecturer",
    "Software Engineering",
    "Cloud Systems, Quality Assurance",
    "hoang-linh-chi.jpg",
  ],
  [
    "Dr. Phan Viet Long",
    "Lecturer",
    "Computer Science",
    "Algorithms, High Performance Computing",
    "phan-viet-long.jpg",
  ],
  [
    "Dr. Nguyen Hai Yen",
    "Lecturer",
    "Information Systems",
    "Fintech, Enterprise Systems",
    "nguyen-hai-yen.jpg",
  ],
  [
    "Dr. Mai Anh Tuan",
    "Lecturer",
    "Cybersecurity",
    "Network Security, IoT",
    "mai-anh-tuan.jpg",
  ],
  [
    "Dr. Tran Quoc Viet",
    "Lecturer",
    "Data Science",
    "Machine Learning, MLOps",
    "tran-quoc-viet.jpg",
  ],
  [
    "Dr. Le Thu Trang",
    "Lecturer",
    "Computer Science",
    "Vision, Image Processing",
    "le-thu-trang.jpg",
  ],
  [
    "Dr. Dang Minh Khoa",
    "Lecturer",
    "Software Engineering",
    "Software Product Management, Agile",
    "dang-minh-khoa.jpg",
  ],
];

export const people: Person[] = rows.map((r, i) => ({
  id: i + 1,
  name: r[0],
  position: r[1],
  department: r[2],
  interests: r[3].split(", "),
  email: `contact${i + 1}@soict.edu.vn`,

  // Local images from public/soict/people/
  avatar: `/soict/people/${r[4]}`,

  biography: `${r[0]} is committed to combining excellent teaching with research that improves how people learn, work and connect through technology. Their work at SOICT focuses on collaborative, responsible innovation.`,
}));