"use client";

import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Twitter, BookOpen } from 'lucide-react';

export default function Home() {
  const [textgradStars, setTextgradStars] = useState<string | number>(0);
  const [octotoolsStars, setOctotoolsStars] = useState<string | number>(0);

  useEffect(() => {
    async function fetchStars(repo: string, setStars: (stars: number) => void)  {
      const response = await fetch(`https://api.github.com/repos/${repo}`);
      const data = await response.json();
      const starCount = data.stargazers_count;
      setStars(starCount >= 1000 ? (starCount / 1000).toFixed(1) + 'k' : starCount);
    }
    fetchStars('zou-group/textgrad', setTextgradStars);
    fetchStars('octotools/octotools', setOctotoolsStars);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f8f8] text-[#333333] font-sans">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <img src="/profile.jpg" alt="Sheng Liu" className="h-10 w-10 rounded-full" />
          <h1 className="text-2xl font-semibold" style={{ fontFamily: 'Arial, sans-serif' }}>Sheng Liu</h1>
        </div>
        <div className="space-x-6 text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>
          <a href="#home" className="hover:text-[#820000] transition">Home</a>
          <a href="#news" className="hover:text-[#820000] transition">Latest News</a>
          <a href="#research" className="hover:text-[#820000] transition">Research</a>
        </div>
      </nav>

      {/* Main Section */}
      <section id="home" className="flex flex-col lg:flex-row items-center justify-center py-16 px-6 lg:px-24 bg-white shadow rounded-2xl mx-4 lg:mx-24 mt-8">
        <img src="/profile.jpg" alt="Sheng Liu" className="w-65 h-65 rounded-2xl shadow-lg mb-8 lg:mb-0 lg:mr-12 relative -left-16 -top-10" />
        <div className="max-w-2xl">
          <h2 className="text-5xl font-semibold mb-4 text-[#820000]" style={{ fontFamily: 'GeistVF, sans-serif' }}>Sheng Liu, PhD</h2>
          <div className="flex items-center space-x-6 text-lg text-[#333333]" style={{ fontFamily: 'GeistVF, sans-serif'}}>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-[#820000]" />
            <a href="mailto:shengl@stanford.edu" className="hover:text-[#555555]">shengl@stanford.edu</a>
          </div>

          <div className="flex items-center space-x-2">
            <Github className="h-5 w-5 text-[#820000]" />
            <a href="https://github.com/shengliu66" className="hover:text-[#555555]">GitHub</a>
          </div>

          <div className="flex items-center space-x-2">
            <Twitter className="h-5 w-5 text-[#820000]" />
            <a href="https://x.com/shengliu_?mx=2" className="hover:text-[#555555]">Twitter</a>
          </div>

          <div className="flex items-center space-x-2">
            <BookOpen className="h-5 w-5 text-[#820000]" />
            <a href="https://scholar.google.es/citations?user=rzhzR-cAAAAJ&hl=en" className="hover:text-[#555555]">Google Scholar</a>
          </div>
        </div>
        <br/>

        <p className="text-lg leading-relaxed" style={{ fontFamily: 'GeistMonoVF, monospace' }}>
          Hi! I am a Postdoctoral Researcher at Stanford University, working with Prof. James Zou and Prof. Lei Xing. I received my PhD in Data Science at Center for Data Science at New York University.  
          <br />
          <br />
          My research focuses on enhancing the reliability of machine learning models and AI agents. My work spans areas such as robustness, multimodality, and uncertainty in AI, and its application to medicine (e.g. Alzheimer's disease, cancer, etc.). Outside of academia, I love playing tennis. I am also a certified scuba diver (AOW) and surfer.
        </p>

          {/* Research Interests Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4 text-[#820000]" style={{ fontFamily: 'Arial, sans-serif' }}>Research Interests:</h3>
            <div className="flex flex-wrap gap-4">
              {['Reliable AI', 'AI agents', 'AI for healthcare'].map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#820000] text-white rounded-full text-sm font-medium hover:bg-[#8C1515] transition"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="news" className="px-6 lg:px-24 py-16 bg-white rounded-2xl mx-4 lg:mx-24 shadow-lg mt-12">
      <h3 className="text-3xl font-semibold text-center mb-10 text-[#820000]" style={{ fontFamily: 'Arial, sans-serif' }}>
        Latest News
      </h3>
      <div className="space-y-8">
        {[
          {
            year: "2025",
            items: [
              {
                date: "2025 02",
                description: (
                  <>
                    <span className="font-semibold">Co-authored</span> {""}
                    <a
                      href="https://arxiv.org/abs/2410.15778"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#820000] hover:underline font-semibold"
                    >
                      OctoTools: An Agentic Framework with Extensible Tools 
                    </a>{" "}
                    is online now. <a
                      href="https://arxiv.org/abs/2410.15778"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#820000] hover:underline font-semibold"
                    >
                    Demo 
                    </a>{" "} and <a
                      href="https://github.com/octotools/octotools"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#820000] hover:underline font-semibold"
                    >
                    Github ⭐️ {octotoolsStars}
                    </a>
                  </>
                ),
            
              },
              
              {
                date: "2025 02",
                description: (
                  <>
                    <span className="font-semibold">Sheng</span> et al. {""}
                    <a
                      href="https://arxiv.org/abs/2410.15778"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#820000] hover:underline font-semibold"
                    >
                      Reducing hallucinations in VLM via latent space steering
                    </a>{" "}
                    is accepted at <span className="font-semibold">ICLR</span> as a{" "} 
                    <span className="text-[#820000] font-semibold">spotlight paper. </span>
                    <a
                      href="https://github.com/shengliu66/VTI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#820000] hover:underline font-semibold"
                    >
                    (Code)
                    </a>
                  </>
                ),
              },
              {
                date: "2025 02",
                description: (
                  <>
                    Paper on robust federated learning {""}
                    <a
                      href="https://arxiv.org/abs/2402.09478"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#820000] hover:underline font-semibold"
                    >
                     Data Reconstruction Attacks and Defenses
                    </a>{" "}
                    is accepted at <span className="font-semibold">AISTATS 2025</span>.
                  </>
                ),
              },

              {
                date: "2025 02",
                description: (
                  <>
                    <span className="font-semibold">Large scale multimodal dataset for medicine {""}</span>
                    <a
                      href="https://arxiv.org/abs/2408.02900"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#820000] hover:underline font-semibold"
                    >
                      MedTrinity-25M
                    </a>{" "}
                    is accepted at <span className="font-semibold">ICLR</span>. 
                    <a
                      href="https://github.com/UCSC-VLAA/MedTrinity-25M"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#820000] hover:underline font-semibold"
                    >
                    (Code
                    </a>
                    <a
                      href="https://huggingface.co/datasets/UCSC-VLAA/MedTrinity-25M#dataset-download-and-preparation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#820000] hover:underline font-semibold"
                    >
                    , Data)
                    </a>
                  </>
                ),
              },

              { date: "2025 01", description: 'I am co-organizing the "Multimodal Foundation Models for Biomedicine" workshop at {link}.', link: { text: "ICCV 2025", url: "https://neurips.cc/Conferences/2024" }},
              {
                date: "2025 01",
                description: (
                  <>
                    Guesture lecture at <span className="font-semibold">UC Santa Cruz{""}</span> by Prof. Yuyin Zhou
                  </>
                ),
              },
              // { date: "2025 02", description: 'LLM feedback for federated learning is accepted at {link}.', link: { text: "ICLR 2025", url: "https://iclr.cc/Conferences/2025" }},
            ],
          },
          {
            year: "2024",
            items: [
              { date: "2024 09", description: 'I am co-organizing the {link} workshop at NeurIPS 2024.', link: { text: "GenAI for Healthcare", url: "https://genai4health.github.io/" }},
              
              {
                date: "2024 09",
                description: (
                  <>
                    One paper   
                    <a
                      href="https://arxiv.org/pdf/2409.15761"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#820000] hover:underline font-semibold"
                    >
                    <span> </span>Training-Free Guidance for Diffusion Models
                    </a>{" "}
                    is accepted at <span className="font-semibold">NeurIPS</span> as <span className="text-[#820000] font-semibold">spotlight</span>. 
          
                  </>
                ),
              },

    
              
              { date: "2024 07", description: '{link} is accepted at COLM 2024.', link: { text: "LLMs in scientific papers", url: "https://arxiv.org/abs/2404.01268" }},
              { 
                date: "2024 07", 
                description: <><a
                href="https://arxiv.org/pdf/2406.15609"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#820000] hover:underline font-semibold"
              >
              <span> </span> Our paper on AI guided radiotherapy treatment planning
              </a>{" "} is online <span className="text font-semibold">Arxiv</span>.</>, 
              },
              { 
                date: "2024 06", 
                description: 'We introduce {link}: Automatic "Differentiation" via Text! Start optimizing prompts in your LLM system.', 
                link: {text: "TextGrad", url: "https://github.com/zou-group/textgrad" }, 
                github: { 
                  text: textgradStars ? `Github ⭐️ ${textgradStars}` : "Fetching stars...",
                  url: "https://github.com/zou-group/textgrad",
                }
              },
              

              { 
                date: "2024 06", 
                description: <><a
                href="https://arxiv.org/abs/2403.07183"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#820000] hover:underline font-semibold"
              >
              <span> </span> In-Context Vector: making ICL more effective and controllable
              </a>{" "} is accepted at <span className="text font-semibold">ICML 2025</span>.</>, 
              },

              { 
                date: "2024 06", 
                description: <>Impact of <a
                href="https://arxiv.org/abs/2403.07183"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#820000] hover:underline font-semibold"
              >
              <span> </span> ChatGPT in AI
              </a>{" "} review is accepted at <span className="text font-semibold">ICML 2025</span> <span className="text-[#820000] font-semibold">(oral)</span>.</>, 
              },
              

              { 
                date: "2024 03", 
                description: '{link} opinion on AI-generated articles (co-authored manuscript).', 
                link: {text: "New York Times", url: "https://www.nytimes.com/2024/03/29/opinion/ai-internet-x-youtube.html" }
            
              },
              
              {
                date: "2024 03",
                description: (
                  <>
                    two papers   
                    <a
                      href="https://arxiv.org/pdf/2212.12206"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#820000] hover:underline font-semibold"
                    >
                    <span> </span> Theoretical analysis on neural collapse
                    </a>{" "} and 
                    <a
                      href="https://arxiv.org/pdf/2311.16361"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#820000] hover:underline font-semibold"
                    >
                    <span> </span> Robust self-supervised learning
                    </a>{" "}
                    are accepted at <span className="font-semibold">TMLR</span>. 
          
                  </>
                ),
              },
            ],
          },
        ].map((news) => (
          <div key={news.year} className="bg-[#f0f0f0] rounded-xl p-6">
            <h4 className="text-2xl font-semibold text-[#820000] mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>{news.year}</h4>
            <ul className="space-y-3 text-lg" style={{ fontFamily: 'Arial, sans-serif' }}>
              {news.items.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="bg-gray-300 px-3 py-1 rounded-full text-sm font-medium text-[#333333] whitespace-nowrap">
                    {item.date}
                  </span>
                  <span>
                    {item.link && item.description.includes("{link}") ? (
                      // Replace "{link}" with the clickable anchor
                      <>
                        {item.description.split("{link}")[0]}
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#820000] hover:underline font-semibold"
                        >
                          {item.link.text}
                        </a>
                        {item.description.split("{link}")[1]}
                      </>
                    ) : item.link ? (
                      // If no placeholder, place the link at the end
                      <>
                        {item.description}{" "}
                        <a
                          href={item.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#820000] hover:underline font-semibold"
                        >
                          {item.link.text}
                        </a>
                      </>
                    ) : (
                      item.description
                    )}
                    {item.github && (
                      <span className="ml-2 text-sm text-[#820000] font-semibold">
                        {item.github.text}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>



      <section id="research" className="px-6 lg:px-24 py-16 bg-white rounded-2xl mx-4 lg:mx-24 shadow-lg mt-12">
        <h3 className="text-3xl font-semibold text-center mb-10 text-[#820000]" style={{ fontFamily: 'GeistVF, sans-serif' }}>
          Active Research Areas
        </h3>

        {/* Research Area 1 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-12">
          <div className="lg:w-1/2">
            <h4 className="text-xl font-bold text-[#820000] mb-3">1. Robust and Reliable AI</h4>
            
            <p className="leading-relaxed text-[#333333] mb-4">
            The real world is complex and noisy: <span className="font-semibold italic">data can be imperfect</span>, <span className="font-semibold italic">labels may be inaccurate</span>, and <span className="font-semibold italic">user prompts are often ambiguous</span>. Directly deploying AI models in such environments without careful consideration can be dangerous. We develop methods to enhance the robustness and reliability of AI models by improving supervised learning with noisy labels and advancing the safety and alignment of foundation models for real-world applications.

{/* Pathology is medicine's ground truth. We train AI models with <span className="font-semibold italic">vision</span>, <span className="font-semibold italic">language</span>, and <span className="font-semibold italic">knowledge</span> to improve machine understanding of pathology. */}
            </p>
          </div>

          <div className="lg:w-1/2 bg-[#f0f0f0] rounded-xl p-6">
            <h5 className="text-lg font-semibold text-[#820000] mb-2">Related Publications:</h5>

            <p className="font-semibold gap-4 mt-1">
            Reducing hallucinations in vision-language models via latent space steering
            </p>
            <p className="mt-1 text-sm">
            <span className="font-bold">Sheng Liu</span>, Haotian Ye, Lei Xing, James Zou
            </p>
            <p className="mt-2">
              <span className="font-semibold text-[#820000]">ICLR</span> (2025)  <span className="font-semibold text-[#820000]">Spotlight</span>
            </p>
            <ul className="flex gap-4 mt-1 text-sm">
              <li><a href="https://arxiv.org/pdf/2410.15778" className="text-[#820000] hover:underline">[paper]</a></li>
              <li><a href="website" className="text-[#820000] hover:underline">[website]</a></li>
              {/* <li><a href="#" className="text-[#820000] hover:underline">[blog]</a></li> */}
            </ul>

            <p className="font-semibold gap-4 mt-1">
            In-context vector: making in-context learning more effective and controllable
            </p>
            <p className="mt-1 text-sm">
            <span className="font-bold">Sheng Liu</span>, Haotian Ye, Lei Xing, James Zou
            </p>
            <p className="mt-2">
              <span className="font-semibold text-[#820000]">ICML</span> (2024) 
            </p>
            <ul className="flex gap-4 mt-1 text-sm">
              <li><a href="https://arxiv.org/pdf/2311.06668" className="text-[#820000] hover:underline">[paper]</a></li>
              <li><a href="https://github.com/shengliu66/ICV" className="text-[#820000] hover:underline">[website]</a></li>
              {/* <li><a href="#" className="text-[#820000] hover:underline">[blog]</a></li> */}
            </ul>

            <p className="font-semibold gap-4 mt-3">
              Early-learning regularization prevents memorization of noisy labels
            </p>
            <p className="mt-1 text-sm">
              <span className="font-bold">Sheng Liu</span>, Jonathan Niles-Weed, Narges Razavian, Carlos Fernandez-Granda
            </p>
            <p className="mt-2">
              <span className="font-semibold text-[#820000]">NeurIPS</span> (2020)
            </p>
            <ul className="flex gap-4 mt-1 text-sm">
              <li><a href="https://arxiv.org/pdf/2007.00151" className="text-[#820000] hover:underline">[paper]</a></li>
              <li><a href="website" className="text-[#820000] hover:underline">[website]</a></li>
              {/* <li><a href="#" className="text-[#820000] hover:underline">[blog]</a></li> */}
            </ul>
            
            
          </div>
        </div>

        {/* Research Area 2 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-12">
          <div className="lg:w-1/2">
            <h4 className="text-xl font-bold text-[#820000] mb-3">2. AI Systems and AI agents</h4>
            <p className="leading-relaxed text-[#333333] mb-4">
              We develop AI software platforms to assist human experts in <span className="font-semibold italic">clinical practice</span> and promote <span className="font-semibold italic">human–AI collaboration</span>. We also optimize AI systemts with large language models (LLMs).
            </p>
          </div>

          <div className="lg:w-1/2 bg-[#f0f0f0] rounded-xl p-6 flex flex-col lg:flex-row items-start lg:items-center gap-4">
  {/* Left: Publication Details */}
          <div className="lg:w-6/7">
            <h5 className="text-lg font-semibold text-[#820000] mb-2">Related Publication:</h5>

            <p className="font-semibold gap-4 mt-1">
            OctoTools: An Agentic Framework with Extensible Tools for Complex Reasoning
            </p>
            <p className="mt-1 text-sm">
            Pan Lu* , Bowen Chen*, <span className="font-bold">Sheng Liu*</span>, Rahul Thapa, Joseph Boen, James Zou (*equal contribution)
            </p>
            <p className="mt-2">
              <span className="font-semibold text-[#820000]">Arxiv</span> (2025) 
            </p>
            <ul className="flex gap-4 mt-1 text-sm">
              <li><a href="https://arxiv.org/pdf/2502.11271" className="text-[#820000] hover:underline">[paper]</a></li>
              <li><a href="https://octotools.github.io/" className="text-[#820000] hover:underline">[website]</a></li>
              <li><a href="https://huggingface.co/spaces/OctoTools/octotools" className="text-[#820000] hover:underline">[demo]</a></li>
              {/* <li><a href="#" className="text-[#820000] hover:underline">[blog]</a></li> */}
            </ul>



            <p className="font-semibold gap-4 mt-3">
            Optimizing generative AI by backpropagating language model feedback
            </p>
            <p className="mt-1 text-sm">
              Mert Yuksekgonul*, Federico Bianchi*, Joseph Boen*, <span className="font-bold">Sheng Liu*</span>, Pan Lu*, Zhi Huang*, Carlos Guestrin, James Zou (*equal contribution)
            </p>
            <p className="mt-2">
              <span className="font-semibold text-[#820000]">Nature</span> (2025)
            </p>
            <ul className="flex gap-4 mt-3 text-sm">
              <li><a href="https://textgrad.com/" className="text-[#820000] hover:underline">[website]</a></li>
              <li><a href="https://arxiv.org/pdf/2406.07496" className="text-[#820000] hover:underline">[paper]</a></li>
              <li><a href="https://hai.stanford.edu/news/textgrad-autograd-text" className="text-[#820000] hover:underline">[Stanford HAI]</a></li>
              <li><a href="https://www.marktechpost.com/2024/06/13/from-manual-tweaks-to-textual-gradients-textgrad-automates-ai-optimization-through-natural-language-guidance/" className="text-[#820000] hover:underline">[marktechpost]</a></li>
              <li><a href="https://syncedreview.com/2024/06/15/stanford-cz-biohubs-textgrad-transforming-ai-optimization-with-textual-feedback/" className="text-[#820000] hover:underline">[Synced]</a></li>
            </ul>
          </div>

          {/* Right: Cover Image */}
          {/* <img
            src="/NMED_202309_Cover.webp"
            alt="Nature Medicine Cover"
            className="lg:w-1/3 w-full rounded-lg shadow-lg object-cover"
          /> */}
        </div>
      </div>

      {/* Research Area 3 */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-12">
          <div className="lg:w-1/2">
            <h4 className="text-xl font-bold text-[#820000] mb-3">3. AI for medicine</h4>
            <p className="leading-relaxed text-[#333333] mb-4">
            Medicine presents high-stakes, complex challenges where accuracy and reliability are paramount. We develop AI models to support clinical decision-making in areas such as radiation oncology and Alzheimer's disease, aiming to improve treatment planning, diagnosis, and patient outcomes. Our work integrates domain knowledge with advanced machine learning techniques to ensure safe, effective, and trustworthy AI solutions for real-world medical applications.
            </p>
          </div>

          <div className="lg:w-1/2 bg-[#f0f0f0] rounded-xl p-6">
            <h5 className="text-lg font-semibold text-[#820000] mb-2">Related Publication:</h5>
            <p className="font-semibold gap-4 mt-1">
            Automated radiotherapy treatment planning guided by GPT-4Vision 
            </p>
            <p className="mt-1 text-sm">
              <span className="font-bold">Sheng Liu</span>, Federico Bianchi, Mert Yuksekgonul, Thomas J. Montine, James Zou
            </p>
            <p className="mt-2">
              <span className="font-semibold text-[#820000]">Arxiv</span> (2024)
            </p>
            <ul className="flex gap-4 mt-3 text-sm">
              <li><a href="#" className="text-[#820000] hover:underline">[paper]</a></li>
              <li><a href="#" className="text-[#820000] hover:underline">[website]</a></li>
              <li><a href="#" className="text-[#820000] hover:underline">[blog]</a></li>
            </ul>

            <p className="font-semibold gap-4 mt-3">
            Generalizable deep learning model for early Alzheimer's disease detection from structural MRIs
            </p>
            <p className="mt-1 text-sm">
              <span className="font-bold">Sheng Liu</span>, Arjun V Masurkar, Henry Rusinek, Jingyun Chen, Ben Zhang, Weicheng Zhu, Carlos Fernandez-Granda, Narges Razavian
            </p>
            <p className="mt-2">
              <span className="font-semibold text-[#820000]">Nature Scientific Reports</span> (2023)
            </p>
            <ul className="flex gap-4 mt-3 text-sm">
              <li><a href="#" className="text-[#820000] hover:underline">[paper]</a></li>
              <li><a href="#" className="text-[#820000] hover:underline">[website]</a></li>
              <li><a href="#" className="text-[#820000] hover:underline">[blog]</a></li>
            </ul>

          </div>
        </div>
      
  
      </section>


      {/* Footer */}
      <footer className="text-center py-6 bg-[#f0f0f0] text-[#555555] text-sm" style={{ fontFamily: 'Arial, sans-serif' }}>
        © 2025 Sheng Liu. All Rights Reserved.
      </footer>
    </div>
  );
}
