import react,{useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Main1 from '../components/Main1'
import Navbar from '../components/Navbar'
import Project from '../components/Project'
import Property from './Property'
import Skills from '../components/Skills'
import styles from '../styles/Home.module.css'
import annex from "../components/Context"

export default function Home() {




  return (
    
    <div>
    
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>      
      <Navbar/>
      <Main1/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    
      </div>
      

      
    </div>
   
  )
}
