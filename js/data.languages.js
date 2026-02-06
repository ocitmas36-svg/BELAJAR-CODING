export const languages = [
  { 
    id: "js", 
    title: "JavaScript", 
    icon: "🟨", 
    desc: "Bahasa wajib untuk membuat website menjadi interaktif.",
    codeExample: "console.log('Halo Dunia');",
    quiz: {
        q: "Apa perintah untuk menampilkan pesan di console?",
        options: ["console.log()", "print()", "echo"],
        answer: 0
    }
  },
  { 
    id: "py", 
    title: "Python", 
    icon: "🐍", 
    desc: "Bahasa populer untuk AI dan Data Science.",
    codeExample: "print('Halo Python')",
    quiz: {
        q: "Kata kunci untuk membuat fungsi di Python adalah?",
        options: ["function", "def", "void"],
        answer: 1
    }
  },
  { 
    id: "sql", 
    title: "SQL", 
    icon: "🗄️", 
    desc: "Bahasa untuk mengelola database.",
    codeExample: "SELECT * FROM users;",
    quiz: {
        q: "Perintah untuk mengambil data adalah?",
        options: ["GET", "SELECT", "FETCH"],
        answer: 1
    }
  }
];
