export const reviewCategories = ["All", "Knee", "Shoulder", "Back"] as const;

export type ReviewCategory = (typeof reviewCategories)[number];

export type GoogleReview = {
  id: string;
  name: string;
  category: Exclude<ReviewCategory, "All">;
  quote: string;
  href: string;
};

/** Reviews supplied by the practice, grouped by the condition described. */
export const googleReviews: GoogleReview[] = [
  {
    id: "amaira-sharma",
    name: "Amaira Sharma",
    category: "Knee",
    href: "https://share.google/NpR9YBZi5XK7nwNL",
    quote:
      "I initially visited Dr. Pradyuman for knee pain. After evaluation, I was diagnosed with osteoarthritis (OA) and was referred to Dr. Bharath, a physiotherapist, for further treatment. Following the physiotherapy sessions, my pain has significantly reduced, and my overall mobility has improved. I am now able to walk more comfortably and perform my daily activities with greater ease.",
  },
  {
    id: "vikesh-chaubey",
    name: "Vikesh Chaubey",
    category: "Knee",
    href: "https://share.google/hGDGI0Jka1VUW96EH",
    quote:
      "I am overwhelmed with gratitude as I pen down this review for Dr. Pradyumna R, a true gem in the medical field. A couple of days ago, my family and I were faced with the daunting decision of whether to proceed with knee replacement surgery for my father, who needed it for both knees. In our time of uncertainty, a friend recommended Dr. Pradyumna, and I can't express how thankful I am for that recommendation.",
  },
  {
    id: "amit-singh-rajawat",
    name: "Amit Singh Rajawat",
    category: "Knee",
    href: "https://share.google/AdfkIdotRpF48esXb",
    quote:
      "I had been suffering from knee arthritis for nearly 10 years. Tried all sorts of treatments—painkillers, injections, physiotherapy—but nothing gave lasting relief. Walking even a short distance became a nightmare. Finally, I met Dr. Pradyumna R, who suggested knee replacement. At first, I was very hesitant because of all the stories I had heard about long recovery times. But the doctor explained the procedure with such clarity that I gained confidence. The surgery was successful, and within weeks I was walking without the unbearable pain I had lived with for years. I wish I had met him sooner. Truly life-changing. Best Orthopedic surgeon on earth!",
  },
  {
    id: "chandan-pathange",
    name: "Chandan Pathange",
    category: "Knee",
    href: "https://share.google/0N7PSxRZuRK7X5Nzz",
    quote:
      "Recently visited the clinic for my knee pain, Dr. Pradyumna listened to my concern very calmly and replied with his experience and motivated me to not to worry about the pain. Given medication and his kind words cured my concern. I thought it may need a surgery but I'm really very happy no surgery suggested. Thanks a lot Dr. Pradyumna.",
  },
  {
    id: "ramya-n",
    name: "Ramya N",
    category: "Shoulder",
    href: "https://share.google/lNlY7Pk7pOjy0jgom",
    quote:
      "Dr Pradyumna is best orthopedic i have ever met. My mom was facing shoulder pain from long back. No one couldn't find problem, but he found and solved with best surgery. Very happy with his guidance and treats like a family member.",
  },
  {
    id: "abhishek-police-patil",
    name: "Abhishek Police Patil",
    category: "Shoulder",
    href: "https://share.google/ilR6coMRKZGHDkOZU",
    quote:
      "Consulted Dr. Pradyuman for my shoulder pain and had a positive experience so far. He explained the condition clearly and the treatment is currently in progress. Feeling hopeful and satisfied with the care and guidance provided.",
  },
  {
    id: "parena-kanwar-dhahiya",
    name: "Parena Kanwar Dhahiya",
    category: "Shoulder",
    href: "https://share.google/BZytIFV6F7UNYtId2",
    quote:
      "Dr Pradyumna is very easy to talk to. I took my mother with shoulder pain issues; he explained in detail for our every question. It has been one week since my mother started taking the medicines he prescribed and doing physiotherapy exercises. Her pain is almost 50% better.",
  },
  {
    id: "nirmal-singh",
    name: "Nirmal Singh Singh",
    category: "Shoulder",
    href: "https://share.google/M5ulpSia1TBi7uPsG",
    quote:
      "I had a shoulder injury while playing volleyball. It was bad and i was in pain. I searched orthopedic doctor on google and visited Dr Pradyumna. He did few tests and confirmed that I have rotator cuff injury. He suggested surgery but i was hesitant. After few days when pain was not reducing, I went back and he did key hole surgery. Thanks to Dr Pradyumna, it is 2 months now and am recovering quite well. See ya soon Doc. Highly recommend him to any people with orthopedic problems.",
  },
  {
    id: "vijay-chhalotre",
    name: "Vijay Chhalotre",
    category: "Shoulder",
    href: "https://share.google/0p3AhmbMD2Ti338Pt",
    quote:
      "Dr Pradyumna is extremely good and polite he explained everything about my injuries in detail and well treated by him and suggested to go for physiotherapy for few weeks with medication. Hari is the physiotherapist available there he is very polite and he has very sound knowledge in physiotherapies problems, I took almost one month treatment for my shoulder blade, shoulder and elbow injuries now I'm able do my daily activities and started gym as well. Thank you Dr Pradyumna and Hari.",
  },
  {
    id: "akshay-mishra",
    name: "Akshay Mishra",
    category: "Back",
    href: "https://share.google/gfHgxvqQjDnskKEMi",
    quote:
      "I injured my back during lifting weights at gym. I googled for back pain doctors near me and found Dr Pradyumna. He is god send. When i went to his clinic, he did a thorough examination and suggested an MRI. Upon investigation, it was found i had a disc bulge in my L4, L5. I was apprehensive to get operated and asked the doctor to suggest alternative options. I tried physiotherapy and exercises, however the pain kept coming back as mentioned in initial consultation by Dr Pradyumna. However, this time i decided to go for Discectomy and dr pradyumna did my surgery. He went extra mile to put me at ease and kudos to his physiotherapy team who did a solid rehabilitation after surgery that am 100% recovered and pain free. Will recommend Dr pradyumna for any spine related issues and back pain. Thank you doctor.",
  },
  {
    id: "anchal-chauhan",
    name: "Anchal Chauhan",
    category: "Back",
    href: "https://share.google/AoTqwte31Cme2WtOR",
    quote:
      "Took my mother for her back pain. I cannot explain how happy I was with Dr Pradyumna’s treatment and explaining. He gave a few tablets and suggested physiotherapy. My mother is feeling better now. Thanks Dr Pradyumna. Definitely recommend him for any orthopedic issues.",
  },
  {
    id: "gyan-p-mishra",
    name: "Gyan P Mishra",
    category: "Back",
    href: "https://share.google/dzMc5sLnVqqWNMTRX",
    quote:
      "Dr Pradyumna R is very professional and helpful. He will listen to your problem patiently and check properly then he will suggest the treatment. I am feeling lucky to visit his clinic for my back pain treatment.",
  },
];
