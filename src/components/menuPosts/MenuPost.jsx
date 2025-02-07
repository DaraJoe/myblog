import React from 'react'
import styles from "./menuPost.module.css"
import Link from 'next/link'
import Image from 'next/image'

const MenuPost = ({withImage}) => {
  return (
    <div className={styles.items}>
    {/* //     <Link href='/' className={styles.item}>
    //       <div className={styles.textContainer}>
    //         <span className={`${styles.category} ${styles.travel}`}>
    //           Travel
    //         </span>
    //         <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
    //         <div className={styles.detail}>
    //           <span className={styles.username}>Joe dara</span>
    //           <span className={styles.date}> - 21.02.2024</span>
    //         </div>
    //       </div>
    //     </Link>
    //     <Link href='/' className={styles.item}>
    //       <div className={styles.textContainer}>
    //         <span className={`${styles.category} ${styles.culture}`}>
    //           Culture
    //         </span>
    //         <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
    //         <div className={styles.detail}>
    //           <span className={styles.username}>Joe dara</span>
    //           <span className={styles.date}> - 21.02.2024</span>
    //         </div>
    //       </div>
    //     </Link>
    //     <Link href='/' className={styles.item}>
    //       <div className={styles.textContainer}>
    //         <span className={`${styles.category} ${styles.food}`}>
    //           Food
    //         </span>
    //         <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
    //         <div className={styles.detail}>
    //           <span className={styles.username}>Joe dara</span>
    //           <span className={styles.date}> - 21.02.2024</span>
    //         </div>
    //       </div>
    //     </Link>
    //     <Link href='/' className={styles.item}>
    //       <div className={styles.textContainer}>
    //         <span className={`${styles.category} ${styles.fashion}`}>
    //           Fashion
    //         </span>
    //         <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
    //         <div className={styles.detail}>
    //           <span className={styles.username}>Joe dara</span>
    //           <span className={styles.date}> - 21.02.2024</span>
    //         </div>
    //       </div>
    //     </Link> */}

      <Link href='/' className={styles.item}>
       {withImage && (<div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.Image}/>
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>
            Travel
          </span>
          <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Joe dara</span>
            <span className={styles.date}> - 21.02.2024</span>
          </div>
        </div>
      </Link>
      <Link href='/' className={styles.item}>
        { withImage && (<div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.Image}/>
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Joe dara</span>
            <span className={styles.date}> - 21.02.2024</span>
          </div>
        </div>
      </Link>
      <Link href='/' className={styles.item}>
        {withImage &&(<div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.Image}/>
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>
            Food
          </span>
          <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Joe dara</span>
            <span className={styles.date}> - 21.02.2024</span>
          </div>
        </div>
      </Link>
      <Link href='/' className={styles.item}>
        {withImage &&(<div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt='' fill className={styles.Image}/>
        </div>)}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Joe dara</span>
            <span className={styles.date}> - 21.02.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPost;