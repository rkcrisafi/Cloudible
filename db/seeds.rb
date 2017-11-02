# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.destroy_all

 books = Book.create([
   { title: "Nightfall",
    author: "Isaac Asimov",
    narrator: "Stephen Eley",
    length: "1 hour and 35 min",
    unabridged: true,
    language: "English",
    summary:
     "The question was rather unnecessary. Beta was almost at zenith, its ruddy light flooding the landscape to an unusual orange as the brilliant rays of setting Gamma died. Beta was at aphelion. It was small; smaller than Theremon had ever seen it before, and for the moment it was undisputed ruler of Lagash sky.",
     image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/nightfall.jpg",
     audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/EP100_Nightfall.mp3"
   },
    { title: "Checkov Collected Stories",
    author: "Anton Checkov",
    narrator: "Alan Davis Drake",
    length: "18 hours and 15 min",
    unabridged: true,
    language: "English",
    summary:
     "Anton Chekhov (1860-1904) shares insightful moments in the everyday lives of 19th Century Russians. With great economy, Chekhov's short stories reveal the depths of human joy, confusion, dissatisfaction, and sorrow. His tales elicit a deep sympathy for all people, wherever they may be, in Russia more than a hundred years ago or anywhere in the world today. These translations, by Constance Garnett, Marian Fell, and others, are offered here as public domain recordings created both for LibriVox.org and at public performances. The copyright recordings that are clearly stated as such are offered here by permission of the publisher are intended for personal and classroom use only and are not for commercial distribution. ",
     image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/checkov_stories.png",
     audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/bet-Chekhov-ADDrake.mp3"
   },

     { title: "The Adventures of Sherlock Holmes",
      author: "Sir Arthur Conan Doyle",
      narrator: "Steven Jobs",
      length: "45 min",
      unabridged: false,
      language: "English",
      summary:
       "To Sherlock Holmes she is always THE woman. I have seldom heard him mention her under any other name. In his eyes she eclipses and predominates the whole of her sex. It was not that he felt any emotion akin to love for Irene Adler. All emotions, and that one particularly, were abhorrent to his cold, precise but admirably balanced mind.",
       image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/170x170bb.jpg",
       audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/the-adventures-of-sherlock-holmes-001-adventure-1-a-scandal-in-bohemia.345.mp3"
      },
       { title: "Crime and Punishment",
        author: "Fyodor Dostoyevski",
        narrator: "Bill Gates",
        length: "35 min",
        unabridged: false,
        language: "English",
        summary:
         "Dostoevsky was the son of a doctor. His parents were very hard-working and deeply religious people, but so poor that they lived with their five children in only two rooms. The father and mother spent their evenings in reading aloud to their children, generally from books of a serious character.",
         image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/CrimePunishment_BS_large.jpg",
         audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/crime-and-punishment-002-part-1-chapter-1.3392.mp3"
       },
         {title: "Pride and Prejudice",
          author: "Jane Austen",
          narrator: "Annie Coleman Rothenberg",
          length: "14 hrs and 15 min",
          unabridged: true,
          language: "English",
          summary:
          "Jane Austen s classic novel chronicles the events in the lives of the Bennet family. Take a family with five unmarried daughters and a lack of wealth, throw in a new wealthy neighbor or two, plus a whole regiment of soldiers in town, and add a heaping spoonful of pride and a pinch of prejudice. Mix it all together and you get a story full of tears and laughter, embarrassment and pride, and, of course, love. (Summary by Annie Coleman)",
           image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/61Otnh85LYL._SL500_.jpg",
           audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/prideandprejudice_01-04_austen_apc_64kb.mp3"
         },
          { title: "Tales of the Jazz Age",
            author: "F. Scott Fitzerald",
            narrator: "Vladimir Putin",
            length: "39 min",
            unabridged: false,
            language: "English",
            summary: "This book contains selections from the F. Scott Fitzgerald collectionTales of the Jazz Age. The short stories collected here include the novelette May Day and the novella The Diamond as Big as the Ritz.",
            image: "https://s3.us-east-2.amazonaws.com/cloudible-dev/books/images/000/000/002/original/tales_of_jazz.jpg",
            audio: "https://s3.us-east-2.amazonaws.com/cloudible-dev/audio/tales-of-the-jazz-age-002-the-jellybean.5765.mp3"
             }])
