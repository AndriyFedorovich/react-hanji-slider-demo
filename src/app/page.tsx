import HanjiSlider from "react-hanji-slider";
import Image from 'next/image'
import primaryImage from './assets/1.jpg';
import secondaryImage from './assets/2.jpg';
import gosuLogoImage from './assets/gosu-logo.svg';
import gitLogoImage from './assets/git.svg';
import npmLogoImage from './assets/npm.svg';
import styles from './page.module.css'

const Home = () => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.wrap}>
          <div className={styles.headerPanel}>
            <a

              href="https://github.com/Gosu-Team/react-hanji-slider"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                className={styles.headerIcon}
                src={gitLogoImage}
                alt="git logo"
                priority
              />
            </a>
            <a

              href="https://www.npmjs.com/package/react-hanji-slider"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Image
                className={styles.headerIcon}
                src={npmLogoImage}
                alt="npm logo"
                priority
              />
            </a>
          </div>
        </div>
      </div>
      <main className={styles.main}>
        <div className={styles.wrap}>
          <h1 className={styles.title}>React Hanji Slider</h1>
          <p className={styles.description}>
            A React Component that allows users to compare two blocks of content interactively. By dragging a slider control, users can unveil or conceal the respective content blocks, providing a visually engaging method for comparing different types of data or images
          </p>

          <div className={styles.slider}>
            <HanjiSlider
              styleSecondary={{ overflow: 'hidden', }}
              stylePrimary={{ overflow: 'hidden', }}
              slidePrimary={
                <div className={styles.slide}>
                  <h3 className={styles.slideTitle}>Primary</h3>
                  <Image
                    src={primaryImage}
                    alt="Awesome Image"
                    priority
                  />
                </div>
              }
              slideSecondary={
                <div className={styles.slide}>
                  <h3 className={styles.slideTitle}>Secondary</h3>
                  <Image
                    src={secondaryImage}
                    alt="Awesome Image"
                    priority
                  />
                </div>
              } />
          </div>

          <div className={styles.slider}>
            <HanjiSlider
              styleSecondary={{ overflow: 'hidden', }}
              stylePrimary={{ overflow: 'hidden', }}
              slideSecondary={
                <div className={`${styles.code} ${styles.ts}`}>
                  <pre><code>
                    {`
// TypeScript code      

const addNumbers = 
  (a: number, b: number): number => a + b;

const result = addNumbers(5, 3);
console.log(result);
                `}
                  </code></pre></div>
              }
              slidePrimary={
                <div className={`${styles.code} ${styles.py}`}>
                  <pre><code>
                    {`
# Python code

def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(result)
                `}
                  </code></pre>
                </div>

              } />
          </div>



        </div>
      </main >
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <span className={styles.footerText}>Developed by the</span>
          <a className={styles.footerLink} target="_blank" rel="noopener" href="https://gosu.team">
            Gosu.team
            <Image
              src={gosuLogoImage}
              alt="Gosu.team"
              priority
            />
          </a>
        </div>
      </footer>
    </>

  )
}

export default Home
