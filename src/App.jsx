import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jparouca.png',
      name: 'Joao Pedro Arouca',
      role: 'Data Engineer at Accenture',
    },
  content: [
    {type: 'paragraph', content: 'On wings of night'},
  ],
  publishedAt: new Date ('2020-08-02 23:22:00'),
 },

 {
  id: 2,
  author: {
    avatarUrl: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blta9fe9fafd4648bf7/60ee0e54d8e2343c032d6420/Jhin_0.jpg',
    name: 'Khada Jhin',
    role: 'Front-End Developer',
  },
content: [
  {type: 'paragraph', content: 'The ecstasy of opening night'},
],
publishedAt: new Date ('2022-04-04 04:44:00'),
},
{
  id: 3,
  author: {
    avatarUrl: 'https://static.wikia.nocookie.net/leagueoflegends/images/8/86/Pantheon_BakerSkin.jpg/revision/latest/scale-to-width-down/1000?cb=20210922230636',
    name: 'Khada Jhin',
    role: 'Front-End Developer',
  },
content: [
  {type: 'paragraph', content: 'The ecstasy of opening night'},
],
publishedAt: new Date ('2022-04-04 04:44:00'),
},
{
  id: 4,
  author: {
    avatarUrl: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blta9fe9fafd4648bf7/60ee0e54d8e2343c032d6420/Jhin_0.jpg',
    name: 'Khada Jhin',
    role: 'Front-End Developer',
  },
content: [
  {type: 'paragraph', content: 'The ecstasy of opening night'},
],
publishedAt: new Date ('2022-04-04 04:44:00'),
},
{
  id: 5,
  author: {
    avatarUrl: 'https://images.contentstack.io/v3/assets/blt187521ff0727be24/blta9fe9fafd4648bf7/60ee0e54d8e2343c032d6420/Jhin_0.jpg',
    name: 'Khada Jhin',
    role: 'Front-End Developer',
  },
content: [
  {type: 'paragraph', content: 'The ecstasy of opening night'},
],
publishedAt: new Date ('2022-04-04 04:44:00'),
},

];


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          {posts.map (post => {
            return <Post
            key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          })}
        </main>
      </div>
    </div>
  )
}

export default App
