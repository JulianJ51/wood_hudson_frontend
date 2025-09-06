<template>
  <div class="lab-page">
    <!-- Page Header -->
    <header class="page-header">
      <h1>Laboratory</h1>
      <p class="lead">
        Explore our Undergraduate Research Education Program (UREP), the Biospecimen Repository Center,
        and selected publications from Wood Hudson Cancer Research Laboratory.
      </p>
      <nav class="toc" aria-label="Section navigation">
        <a href="#urep">UREP</a>
        <a href="#biorepo">Biospecimen Repository Center</a>
        <a href="#publications">Publications</a>
      </nav>
    </header>

    <!-- ===== U R E P ===== -->
    <section id="urep" class="section">
      <div class="section-hero">
        <img :src="placeholderWide" alt="UREP banner placeholder" />
        <div class="hero-overlay">
          <h2>Undergraduate Research Education Program (UREP)</h2>
          <p>Hands-on biomedical research and professional development for rising scientists.</p>
        </div>
      </div>

      <div class="section-inner">
        <h3 class="visually-hidden">About UREP</h3>
        <div class="two-col">
          <div>
            <p>
              <strong>Undergraduate Research Education Program</strong> — Wood Hudson's Undergraduate Research
              Education Program, UREP, is a vibrant and beneficial educational program for students. As more
              students are extending their education beyond the bachelor's degree, admission into medical or
              other allied health schools is becoming more competitive. Students in UREP have the unique
              opportunity to gain hands-on experience by working alongside our scientists doing biomedical
              research.
            </p>
            <p>
              Since the program started, <strong>300 students</strong> from <strong>46 universities and colleges</strong>
              have been trained in our laboratory while receiving college credit for their hands-on research
              experience.
            </p>
          </div>
          <aside class="stat-panel" aria-label="UREP stats">
            <div class="stat">
              <span class="num">1982</span>
              <span class="label">Program founded</span>
            </div>
            <div class="stat">
              <span class="num">~350</span>
              <span class="label">Students trained</span>
            </div>
            <div class="stat">
              <span class="num">54%</span>
              <span class="label">Women served</span>
            </div>
            <div class="stat">
              <span class="num">42%</span>
              <span class="label">Scientists/Educators</span>
            </div>
            <div class="stat">
              <span class="num">51%</span>
              <span class="label">Medicine/Healthcare</span>
            </div>
          </aside>
        </div>

        <div class="callout">
          <p>
            UREP is funded through private donations and grants from PNC Charitable Trusts, the R.C. Durr
            Foundation, and the Chemed Foundation. <strong>Thank you</strong> for making UREP possible!
          </p>
        </div>

        <!-- UREP Highlights Grid -->
        <h3 class="subheading">Highlights &amp; Student Spotlights</h3>
        <div class="card-grid">
          <!-- Sarisha Lohano -->
          <article class="card">
            <div class="card-media">
              <img :src="placeholder" alt="Sarisha Lohano presentation placeholder" />
            </div>
            <div class="card-body">
              <h4>Sarisha Lohano — Research Presentation</h4>
              <p class="muted">KAS Annual Meeting (Division of Health Sciences)</p>
              <p>
                Sarisha, a summer UREP student, presented <em>“How Obesity Alters Metabolism and Impairs Immune
                Function, Contributing to Initiation of Early-Onset Colorectal Cancer.”</em> She proposed
                tracking eating habits across BMI categories and ethnic groups, hypothesizing that Western diet
                patterns increase BMI, lower resting metabolic rate, and impair immune function—raising risk for
                early-onset CRC.
              </p>
              <p class="muted">2021 KAS was held virtually on Nov 5–6 (hosted by Eastern Kentucky University).</p>
            </div>
          </article>

          <!-- UREP 2021 Success -->
          <article class="card">
            <div class="card-media"><img :src="placeholderLab" alt="UREP 2021 cohort placeholder" /></div>
            <div class="card-body">
              <h4>UREP 2021 — A Great Success</h4>
              <p>
                Wood Hudson’s virtual summer UREP ran May 10–Aug 11 with eighteen students. The cohort studied
                cancer biology, presented chapters from <em>Principles of Cancer Biology</em>, discussed journal
                articles, and designed projects answering NIH/NCI Provocative Questions. Many thanks to guest
                speakers, Dr. Larry Douglass, Dr. Ron Snyder, Professor Diane Gilb, and Dr. Julia Carter.
              </p>
              <ul class="bullets">
                <li>Mon–Wed online seminars, demos, and journal clubs</li>
                <li>Final written &amp; oral reports</li>
                <li>Critical thinking and career preparation emphasized</li>
              </ul>
              <p>
                Since 1982, UREP has trained nearly 350 students; the experience boosts success applying to
                medical, graduate, and advanced programs.
              </p>
            </div>
          </article>

          <!-- Summer students 2021 names -->
          <article class="card">
            <div class="card-media"><img :src="placeholderGroup" alt="Summer 2021 students placeholder" /></div>
            <div class="card-body">
              <h4>Summer Students 2021</h4>
              <p class="muted">Not in order of appearance</p>
              <p>
                From Gatton Academy/WKU: Krupa Hegde, Sarisha Lohano; from University of Kentucky: Norman Chan;
                from Mt. St. Joseph University: Kimberly Holland, Michael Sundahl; and from Xavier University:
                Natasha Abro, Heidi Arth, Sarah Been, Lauren Bennett, Jon Bernard, Ian Dissett, Olivia Jenkins,
                Andrew Lim, Jacob Lyons, Natalie Lyons, Hannah Russell, Julian Wiggins, and Zach Wilson.
              </p>
            </div>
          </article>

          <!-- Brianna Hoegermeyer -->
          <article class="card">
            <div class="card-media"><img :src="placeholderPortrait" alt="Brianna Hoegermeyer placeholder" /></div>
            <div class="card-body">
              <h4>Brianna Hoegermeyer — Student Researcher</h4>
              <p>
                During the 2020 virtual UREP, Brianna (Thomas More University) dove deep into cancer biology,
                histology, and attended AACR. She highlights the value of the capstone proposal and ongoing
                lab work: staining tissues, microscopy, and iterative analysis with mentors Dr. Douglass and
                Dr. Carter.
              </p>
              <p class="muted">Interested students: contact Dr. Julia Carter at <a href="mailto:jcarter@woodhudson.org">jcarter@woodhudson.org</a>.</p>
            </div>
          </article>

          <!-- Summer 2020 Video -->
          <article class="card">
            <div class="card-media video">
              <img :src="placeholderVideo" alt="Video placeholder" />
              <button type="button" class="play-btn" aria-label="Play video">▶</button>
            </div>
            <div class="card-body">
              <h4>Summer 2020 UREP — Video</h4>
              <p>
                In a year of social distancing, Wood Hudson pioneered a 10-student virtual program. Hear directly
                from students about the experience.
              </p>
              <p class="muted">“How do we run a lab program while remote?” This video captures the answer.</p>
            </div>
          </article>

          <!-- Summer 2020 UREP (details + quote) -->
          <article class="card">
            <div class="card-media"><img :src="placeholder" alt="Summer 2020 virtual cohort placeholder" /></div>
            <div class="card-body">
              <h4>Summer 2020 Undergraduate Research Education Program</h4>
              <p>
                Ten students met via Zoom (Mon–Wed) to study cancer biology, present journal articles, learn lab
                techniques, and attend cancer research seminars. Each tackled an NIH provocative question and
                presented a capstone with background, design, anticipated results, and discussion.
              </p>
              <blockquote>
                “Dr. Carter snatched victory from the jaws of defeat... a meaningful program with study, virtual
                learning, journal presentations, guest speakers, and challenging capstones.”
                <span class="quote-attr">— Dr. Ron Snyder, Wood Hudson Board of Trustees</span>
              </blockquote>
            </div>
          </article>

          <!-- Ryan Moore -->
          <article class="card">
            <div class="card-media"><img :src="placeholderPortrait" alt="Ryan Moore placeholder" /></div>
            <div class="card-body">
              <h4>Ryan Moore — Senior Researcher (NKU)</h4>
              <p>
                Projects include nicotine &amp; bladder cancer, breast cancer metabolism (asparagine), and the
                inverse relationship of cathepsin-L and proliferation. An expert in protein quantification, Ryan
                plans graduate school after Spring 2020.
              </p>
            </div>
          </article>

          <!-- Anna Oliverio -->
          <article class="card">
            <div class="card-media"><img :src="placeholderPortrait" alt="Anna Oliverio placeholder" /></div>
            <div class="card-body">
              <h4>Anna Oliverio — Student Researcher</h4>
              <p>
                Junior at Thomas More University. Studies the serine biosynthesis pathway in breast cancer cell
                lines and techniques including tissue staining, western blotting, and cell culture. Aspires to
                graduate study in cell/molecular or cancer biology.
              </p>
            </div>
          </article>

          <!-- Michael Parritt -->
          <article class="card">
            <div class="card-media"><img :src="placeholderPortrait" alt="Michael Parritt placeholder" /></div>
            <div class="card-body">
              <h4>Michael Parritt — Student Researcher</h4>
              <p>
                UREP since May 2019; presented at KAS: <em>“P21 Activated Kinase-1 Transforming Growth Factor α
                and Ki67 Expression in Human Gastric and Gastroesophageal Junction Adenocarcinomas.”</em> Won
                third prize; excelled in tissue culture; planning medical school or a Ph.D.
              </p>
            </div>
          </article>

          <!-- Leah Focke -->
          <article class="card">
            <div class="card-media"><img :src="placeholderPortrait" alt="Leah Focke placeholder" /></div>
            <div class="card-body">
              <h4>Leah Focke — Research Assistant</h4>
              <p>
                Capstone on TGF-β signaling in ovarian cancer; nominated Co-Op Student of the Year and won
                Chemistry Department Student of the Year. Now full-time Research Assistant at Wood Hudson.
              </p>
            </div>
          </article>

          <!-- Kalin Russell -->
          <article class="card">
            <div class="card-media"><img :src="placeholderPortrait" alt="Kalin Russell placeholder" /></div>
            <div class="card-body">
              <h4>Kalin Russell — Data Analyst</h4>
              <p>
                UC Senior Capstone: analyzed seven biomarkers in ovarian cancer; discovered a passion for data
                analysis. Recently joined Medpace as a Data Analyst.
              </p>
            </div>
          </article>

          <!-- KAS 2019 -->
          <article class="card">
            <div class="card-media"><img :src="placeholderStage" alt="KAS 2019 placeholder" /></div>
            <div class="card-body">
              <h4>KAS 2019 — Strong UREP Presence</h4>
              <p>
                KAS featured 600 scientists at Berea College, Nov 1–2. UREP students presented posters and an
                oral report across breast, bladder, ovarian, and gastric cancer projects. Awards included
                first place (Physiology &amp; Biochemistry, poster) and third place (oral).
              </p>
            </div>
          </article>

          <!-- GSIP / New Initiatives -->
          <article class="card">
            <div class="card-media"><img :src="placeholder" alt="GSIP partnership placeholder" /></div>
            <div class="card-body">
              <h4>New Summer UREP Initiatives — GSIP</h4>
              <p>
                In 2019, Wood Hudson partnered with the Gatton Academy’s Summer Internship Program (GSIP) to
                provide 8-week project-based internships with dedicated mentorship and defined outcomes. Wood
                Hudson has mentored Gatton students since 2009.
              </p>
              <p class="muted">If your organization is interested in hosting a Gatton intern, contact Cheryl
                Kirby-Stokes (WKU).</p>
            </div>
          </article>

          <!-- 5 Students to Med School -->
          <article class="card">
            <div class="card-media"><img :src="placeholderCaps" alt="Medical school acceptances placeholder" /></div>
            <div class="card-body">
              <h4>Five UREP Students Begin Medical School (2019)</h4>
              <p>
                UREP encourages STEM persistence and careers in science &amp; medicine—92% of participants over
                37 years have continued in these paths. Recent acceptances include the inaugural class at the UK
                College of Medicine Northern Kentucky Campus and other respected programs.
              </p>
            </div>
          </article>

          <!-- KAS 2018 -->
          <article class="card">
            <div class="card-media"><img :src="placeholderStage" alt="KAS 2018 placeholder" /></div>
            <div class="card-body">
              <h4>KAS 2018 — Working Across Kentucky</h4>
              <p>
                Hosted by Western Kentucky University, the 104th KAS meeting featured posters, the Corvette Museum
                keynote, and UREP oral presentations across breast, bladder, and ovarian projects. David Kelly won
                second place (Physiology &amp; Biochemistry). Dr. Leila Valanejad served as Section Secretary; Dr.
                Julia Carter served as Section Chair.
              </p>
            </div>
          </article>
        </div>

        <div class="funding-note">
          <p>
            Wood Hudson will continue to provide UREP (year-round). Interested college students should contact
            <a href="mailto:jcarter@woodhudson.org">Dr. Julia Carter</a>.
          </p>
        </div>
      </div>
    </section>

    <!-- ===== B I O S P E C I M E N   R E P O S I T O R Y ===== -->
    <section id="biorepo" class="section alt">
      <div class="section-hero">
        <img :src="placeholderShelf" alt="Biospecimen repository shelves placeholder" />
        <div class="hero-overlay">
          <h2>Biospecimen Repository Center</h2>
          <p>A unique resource central to discovery in diagnosis, prognosis, and therapy.</p>
        </div>
      </div>

      <div class="section-inner">
        <div class="two-col">
          <div>
            <p>
              Wood Hudson has grown over the years, including construction of the Biospecimen Repository Center
              in <strong>2012</strong>. The Repository is a collection of nearly <strong>2 million archived
              tissue specimens</strong> representing over <strong>65,000 local cancer patients</strong> of all
              ages. Every major form of cancer is represented. The expansion was funded entirely by private
              donations, foundations, civic organizations, and businesses.
            </p>
            <p>
              This repository enables validation of new therapeutic targets and the development of new
              approaches to cancer diagnosis and prognosis. Wood Hudson is the only Kentucky member of the
              <em>Association of Independent Research Institutes (AIRI)</em>. Only a small number of independent
              research institutes in the U.S. focus solely on cancer research. While we collaborate with
              hospitals and universities, we are independent—no one benefits financially from our discoveries.
            </p>
          </div>
          <aside class="fact-cards">
            <div class="fact">
              <span class="big">~2M</span>
              <span class="small">Archived specimens</span>
            </div>
            <div class="fact">
              <span class="big">65k+</span>
              <span class="small">Patients represented</span>
            </div>
            <div class="fact">
              <span class="big">2012</span>
              <span class="small">Center opened</span>
            </div>
            <div class="fact">
              <span class="big">AIRI</span>
              <span class="small">Member institute</span>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- ===== P U B L I C A T I O N S ===== -->
    <section id="publications" class="section">
      <div class="section-hero">
        <img :src="placeholderPapers" alt="Publications placeholder" />
        <div class="hero-overlay">
          <h2>Selected Publications</h2>
          <p>Studies of biomarkers, targets for therapy, and environmental carcinogenesis.</p>
        </div>
      </div>

      <div class="section-inner">
        <h3 class="subheading">Studies of potential biomarkers for cancer diagnosis and prognosis and targets for therapy</h3>
        <ul class="pub-list">
          <li>
            <strong>Carter JH</strong>, Deddens JA, Mueller G, Lewis TG, Dooley MK, Robillard MC, Frydl M, Duvall L, Pemberton JO, Douglass LE.
            Transcription factors WT1 and p53 combined: a prognostic biomarker in ovarian cancer. <em>British J. Cancer</em>, 2018.
            <a href="https://www.nature.com/articles/s41416-018-0191-x" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            <strong>Carter JH</strong>, Deddens JA, Muller G, Lewis TG, Dooley MK, Pemberton JO, Douglass LE. Evidence for WT1 as a potential
            target for immunotherapy of ovarian cancer. <em>Proc. AACR</em> 58:712-713, 2017.
          </li>
          <li>
            Uhlik MT, Liu J, Falcon BL, Iyer S, Stewart J, Celikkaya H, O’Mahony M, Sevinsky C, Lowes C, Douglass L, Jeffries C, Bodenmiller D,
            Chintharlapalli S, Fisch A, Gerald D, Xue Q, Lee J, Santamaria-Pang A, Al-Kofahi Y, Sui Y, Desai K, Doman T, Aggarwal A,
            <strong>Carter JH</strong>, Pytowski B, Jaminet S, Ginty F, Nasir A, Nagy JA, Dvorak HF, Benjamin LE. Stromal-based Signatures for the
            Classification of Gastric Cancers. <em>Cancer Research</em> 76:2573-2586, 2016.
            <a href="https://cancerres.aacrjournals.org/content/76/9/2573" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            <strong>Carter J.H.</strong>, Deddens JA, Spaulding NR, Lucas D, Colligan BM, Lewis TG, Hawkins E, Jones J, Pemberton JO, Douglass LE, Graff JR.
            Phosphorylation of eIF4E Ser209 is Associated with Tumor Progression and Reduced Survival in Malignant Melanoma.
            <em>British J. Cancer</em> 114:444-453, 2016. <a href="https://www.nature.com/articles/bjc2015450" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            Fajardo AM, Browne T, Graff H, Kleier K, Neltner K, McCall C, Meyer B, Douglass LE, <strong>Carter JH</strong>.
            Targeting PAK1 activity in breast cancer: Inhibition of cell growth, survival, motility, and signaling.
            <em>Cancer Research</em> 75:1024, 2015.
          </li>
          <li>
            <strong>Carter JH</strong>, Spaulding NR, Colligan BM, Deddens JA, Douglass LE. Overexpression of PAK1 is a favorable prognostic biomarker in malignant melanoma.
            <em>Cancer Research</em> 73:22, 2013.
          </li>
          <li>
            Thobe MN, Yan SB, Credille KM, Nasir A, Roseberry Baker JA, Lajiness M, Brooks NA, Ballard DW, Farley DM, Peek VL, Um SL, Jin GJ,
            Gilmour R, Reinhard C, Graff JR, Schade AE, Gruver AM, Colligan BM, Douglass LE, <strong>Carter JH</strong>, Walgren RA.
            MET expression and related alterations in cholangiocarcinoma. <em>Cancer Research</em> 73:2339, 2013.
          </li>
          <li>
            <strong>Carter JH</strong>, Murray K, Bender J, Restle H, Mulvihill S, Colligan BM, Deddens JA, Schaeper JP, Douglass LE.
            TGFβR1 Int7G24A increases risk for colon cancer. <em>Cancer Research</em> 72:1153, 2012.
          </li>
          <li>
            <strong>Carter JH</strong>, Douglass LE, Deddens JA, Colligan BM, Hurst BM, Pullman J, Richmond RE, Carter HW.
            Cathepsin L overexpression and prostate cancer progression. <em>Cancer Research</em> 71:4172, 2011.
          </li>
          <li>
            Schaeper JP, Murray K, DeBrosse JL, Vogt B, Lucas D, Colligan BM, Deddens JA, Douglass LE, Graff JR, <strong>Carter JH</strong>.
            TGFβR1 variants in colorectal cancer. <em>Cancer Research</em> 70:1183, 2010.
          </li>
          <li>
            Schaeper JP, Chen T, Markey M, Shields R, Bree K, Kohrs B, Baldwin C, Colligan BM, Deddens JA, Graff JR, Douglass LE, <strong>Carter JH</strong>.
            TGFβR1 Int7G24A and ovarian cancer progression. <em>Cancer Research</em> 69:5615, 2009.
          </li>
          <li>
            <strong>Carter JH</strong>, Graff JR, Schaeper J, Nardini D, Love M, Colligan BM, Deddens JA, Douglass LE.
            eIF4E rises during cervical cancer progression and correlates with proliferation. <em>Cancer Research</em> 69:5558, 2009.
          </li>
          <li>
            Douglass LE, Deddens JA, Colligan BM, Lucas D, Foertsch A, Graff JR, <strong>Carter JH</strong>.
            β-Catenin in colorectal cancer development and survival. <em>Cancer Research</em> 69:1652, 2009.
          </li>
          <li>
            Graff JR, Konicek BW, Lynch RL, Dumstorf CA, Dowless MS, McNulty AM, Parsons S, Brail L, Colligan BM, Koop JW, Hurst BM, Deddens JA,
            Neubauer BL, Stancato LF, Carter HW, Douglass LE, <strong>Carter JH</strong>. eIF4E activation in advanced prostate cancers.
            <em>Cancer Research</em> 69(9):3866-73, 2009.
            <a href="http://cancerres.aacrjournals.org/content/69/9/3866.full" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            Graff JR, Konicek BW, <strong>Carter JH</strong>, Marcusson EG. Targeting eIF4E for cancer therapy.
            <em>Cancer Research</em> 68(3):631-634, 2008.
            <a href="http://cancerres.aacrjournals.org/content/68/3/631.full" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            Graff JR, Konicek BW, Deddens JA, Chedid M, Hurst BM, Colligan BM, Neubauer BL, Carter HW, <strong>Carter JH</strong>.
            sPLA2 increases with prostate tumor grade. <em>Clin. Cancer Res.</em> 7:3857-3861, 2001.
            <a href="http://clincancerres.aacrjournals.org/content/7/12/3857.full" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            Graff JR, Deddens JA, Konicek BW, Colligan BM, Hurst BM, Neubauer BL, Carter HW, <strong>Carter JH</strong>.
            ILK expression increases with prostate tumor grade. <em>Clin. Cancer Res.</em> 7:1987-1991, 2001.
            <a href="http://clincancerres.aacrjournals.org/content/7/7/1987.full" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            Chen T, Triplett J, Dehner B, Hurst B, Colligan B, Pemberton J, Graff JR, <strong>Carter JH</strong>.
            TGF-β Receptor I gene frequently mutated in ovarian carcinomas. <em>Cancer Research</em> 61:4679-4682, 2001.
            <a href="http://cancerres.aacrjournals.org/content/61/12/4679.full" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            <strong>Carter JH</strong>, Deddens JA, Pullman JL, Colligan BM, Whiteley LO, Carter HW.
            GOS sequence validation for early colorectal adenocarcinoma detection. <em>Clin. Cancer Res.</em> 3:1479-1489, 1997.
            <a href="http://clincancerres.aacrjournals.org/content/3/9/1479.full.pdf+html" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            Richmond RE, <strong>Carter JH</strong>, Carter HW, Magrisso IJ, Pross C, Gilfillen R.
            Oncoprotein expression in colorectal adenomas and carcinomas. <em>Lab. Invest.</em> 69:674-681, 1993.
          </li>
        </ul>

        <h3 class="subheading">Studies of cancer causing potential of environmental chemicals</h3>
        <ul class="pub-list">
          <li>
            Wehmas LC, DeAngelo AB, Hester SD, Chorley BN, Carswell G, Olson GR, George M, <strong>Carter JH</strong>, Eldridge SR, Fisher A,
            Vallanat B, Wood CE. Metabolic disruption early in life &amp; latent carcinogenesis of DCA in mice.
            <em>Toxicological Sciences</em> 159:354-365, 2017.
          </li>
          <li>
            Wood CE, Jokinen MP, Johnson CL, Olson GR, Hester S, George M, Chorley AN, Carswell G, <strong>Carter JH</strong>, Wood CR, Bhat VS,
            Corton JC, DeAngelo AB. Time-course profiles of phthalate stereoisomers in mice. <em>Toxicol. Sci.</em> 139:21-34, 2014.
            <a href="https://academic.oup.com/toxsci/article-abstract/139/1/21/1670725?redirectedFrom=fulltext" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            <strong>Carter JH</strong>, Vogelpohl S, Tucker MK, Tagher R. Sub-lethal autolysis preceding hepatic lesions with phthalate esters.
            <em>Cancer Research</em> 74:3185, 2014.
          </li>
          <li>
            <strong>Carter JH</strong>, Carter HW, Deddens JA, Hurst BM, George MH, DeAngelo AB. Two-year dose-response of lesion sequences during
            hepatocellular carcinogenesis by dichloroacetic acid. <em>Environ. Health Persp.</em> 111:53-64, 2003.
          </li>
          <li>
            Snyder RD, Vogelpohl SJ, Baldwin BL, Deaton ED, Baden E, <strong>Carter JH</strong>. Apparent inhibition of apoptosis by polyamines and
            aminothiols is artifactual. <em>Cell Death &amp; Differentiation</em> 3:323-330, 1996.
            <a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=snyder+apparent+inhibition+of+apoptosis" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            Richmond RE, <strong>Carter JH</strong>, Carter HW, Daniel FB, DeAngelo AB. Hepatocyte markers following DEN initiation and DEHP exposure.
            <em>Carcinogenesis</em> 17:1647-1655, 1996.
            <a href="https://academic.oup.com/carcin/article/17/8/1647/2475905?searchresult=1" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            <strong>Carter JH</strong>, Carter HW, DeAngelo AB, Daniel FB. Short-term DCA exposure effects in mouse liver.
            <em>Toxicol. Lett.</em> 81:55-71, 1995.
            <a href="https://www.sciencedirect.com/science/article/abs/pii/0378427495034099" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            Richmond RE, <strong>Carter JH</strong>, Carter HW, Daniel FB, DeAngelo AB. Immunohistochemical analysis of DCA-induced hepatocarcinogenesis.
            <em>Cancer Lett.</em> 92:67-76, 1995.
            <a href="https://www.sciencedirect.com/science/article/abs/pii/0304383594037569" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            Snyder RD, Pullman J, <strong>Carter JH</strong>, Carter HW, DeAngelo AB. In vivo DCA suppresses spontaneous hepatocyte apoptosis.
            <em>Cancer Research</em> 55:3702-3705, 1995.
            <a href="http://cancerres.aacrjournals.org/content/55/17/3702.full.pdf+html" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            <strong>Carter JH</strong>, Richmond RE, Carter HW, Potter CL, Daniel FB, DeAngelo AB.
            Quantitative image cytometry in rat liver under phenobarbital/phthalate exposure.
            <em>J. Histochem. &amp; Cytochem.</em> 40:1105-1115, 1992.
            <a href="https://journals.sagepub.com/doi/pdf/10.1177/40.8.1352315" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            <strong>Carter JH</strong> and Carter HW. Adrenal regulation of mammary tumorigenesis — histopathology.
            <em>Cancer Research</em> 48:3808-3815, 1988.
            <a href="http://cancerres.aacrjournals.org/content/48/13/3808.full.pdf+html" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            <strong>Carter JH</strong>, Carter HW, Meade J. Adrenal regulation of mammary tumorigenesis — incidence/latency/yield.
            <em>Cancer Research</em> 48:3801-3807, 1988.
            <a href="http://cancerres.aacrjournals.org/content/48/13/3801.full.pdf+html" target="_blank" rel="noopener">Link</a>
          </li>
          <li>
            Richmond RE, Pereira MA, <strong>Carter JH</strong>, Carter HW, Long RE. Myc/Src oncogene proteins in normal, nodule, and neoplastic rat liver.
            <em>J. Histochem. &amp; Cytochem.</em> 36:179-184, 1988.
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LaboratoryPage",
  data() {
    const svg = (w = 1200, h = 800, text = "Image") =>
      `data:image/svg+xml;utf8,` +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'>` +
          `<defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>` +
          `<stop offset='0%' stop-color='#f6f7f9'/><stop offset='100%' stop-color='#eceff3'/></linearGradient></defs>` +
          `<rect width='100%' height='100%' fill='url(#g)'/>` +
          `<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40' fill='#9aa3ad'>${text}</text>` +
        `</svg>`
      );

    return {
      placeholder: svg(1200, 800, "Photo"),
      placeholderPortrait: svg(1200, 1500, "Portrait"),
      placeholderGroup: svg(1400, 900, "Cohort"),
      placeholderLab: svg(1400, 900, "Lab"),
      placeholderVideo: svg(1400, 900, "Video"),
      placeholderShelf: svg(1400, 900, "Repository"),
      placeholderPapers: svg(1400, 900, "Publications"),
      placeholderCaps: svg(1400, 900, "Medical School"),
      placeholderStage: svg(1400, 900, "Conference"),
      placeholderWide: svg(1600, 700, "UREP")
    };
  }
};
</script>

<style scoped>
/* ===== Base ===== */
:root {
  --bg: #fafafa;
  --surface: #ffffff;
  --border: #e6ebf1;
  --text: #1f2937;
  --muted: #64748b;
  --brand: #0f766e; /* teal */
  --brand-2: #155e75; /* darker teal */
  --ring: rgba(15,118,110,0.15);
}

.lab-page {
  background: var(--bg);
  color: var(--text);
  padding: 1.5rem 1rem 4rem;
}

.page-header {
  max-width: 1200px;
  margin: 0 auto 1.25rem;
}

.page-header h1 {
  font-size: clamp(2rem, 4vw, 3rem);
  margin: 0;
  letter-spacing: 0.2px;
}

.lead {
  margin: 0.5rem 0 0.75rem;
  color: var(--muted);
  max-width: 60ch;
}

.toc {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.toc a {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 9999px;
  color: var(--brand);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: box-shadow 0.15s ease, transform 0.1s ease;
}
.toc a:hover {
  box-shadow: 0 0 0 6px var(--ring);
  transform: translateY(-1px);
}

/* ===== Sections ===== */
.section {
  max-width: 1200px;
  margin: 2rem auto 0;
  scroll-margin-top: 96px;
}

.section.alt {
  background: linear-gradient(180deg, #ffffff, #f7fafc 60%);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 2rem 1rem 2.5rem;
  border-radius: 16px;
}

.section-hero {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface);
}
.section-hero img {
  width: 100%;
  height: clamp(200px, 28vw, 340px);
  object-fit: cover;
  display: block;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.45));
  color: #fff;
  display: grid;
  place-content: end start;
  padding: 1rem 1.25rem;
}
.hero-overlay h2 {
  margin: 0 0 0.25rem;
  font-size: clamp(1.4rem, 2.6vw, 2rem);
  font-weight: 800;
}
.hero-overlay p {
  margin: 0 0 0.25rem;
  max-width: 60ch;
  opacity: 0.95;
}

.section-inner {
  margin-top: 1.25rem;
}

/* ===== Layout Helpers ===== */
.two-col {
  display: grid;
  grid-template-columns: 2fr minmax(260px, 1fr);
  gap: clamp(1rem, 3vw, 2rem);
  align-items: start;
}

.stat-panel {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 0.75rem;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 0.75rem;
}
.stat {
  background: #f8fafc;
  border: 1px dashed var(--border);
  border-radius: 12px;
  padding: 0.6rem;
  text-align: center;
}
.stat .num {
  font-weight: 800;
  font-size: 1.25rem;
  color: var(--brand-2);
  display: block;
}
.stat .label {
  color: var(--muted);
  font-size: 0.85rem;
}

.callout,
.funding-note {
  background: #ecfeff;
  border: 1px solid #bae6fd;
  border-radius: 12px;
  padding: 0.9rem 1rem;
  margin: 1rem 0 1.25rem;
  color: #065f46;
}

/* ===== Cards ===== */
.subheading {
  margin: 1.25rem 0 0.5rem;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: clamp(0.9rem, 2vw, 1.25rem);
  margin-top: 0.75rem;
}

.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 28px rgba(15, 23, 42, 0.06);
  transition: transform 0.12s ease, box-shadow 0.12s ease;
  display: flex;
  flex-direction: column;
}
.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 36px rgba(15, 23, 42, 0.1);
}
.card-media {
  background: #f5f7fb;
  aspect-ratio: 4 / 3;
  position: relative;
}
.card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-media.video .play-btn {
  position: absolute;
  inset: auto auto 12px 12px;
  border: none;
  background: rgba(15, 118, 110, 0.9);
  color: #fff;
  padding: 0.45rem 0.65rem;
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
}
.card-body {
  padding: 0.9rem 1rem 1.1rem;
}
.card-body h4 {
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
}
.card-body p { margin: 0.25rem 0; }
.bullets { margin: 0.35rem 0 0.5rem 1.1rem; }
.muted { color: var(--muted); font-size: 0.95rem; }
blockquote {
  margin: 0.6rem 0 0;
  padding: 0.6rem 0.8rem;
  background: #f8fafc;
  border-left: 3px solid var(--brand);
  border-radius: 6px;
  color: #0b1736;
  font-style: italic;
}
.quote-attr {
  display: block;
  margin-top: 0.25rem;
  font-style: normal;
  color: var(--muted);
}

/* ===== BioRepository facts ===== */
.fact-cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 0.75rem;
}
.fact {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 0.85rem;
  text-align: center;
}
.fact .big {
  display: block;
  font-weight: 900;
  font-size: 1.35rem;
  color: var(--brand-2);
}
.fact .small {
  color: var(--muted);
  font-size: 0.85rem;
}

/* ===== Publications ===== */
.pub-list {
  margin: 0.5rem 0 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.55rem;
}
.pub-list li {
  line-height: 1.55;
}
.pub-list a {
  color: var(--brand);
  text-decoration: underline;
}
.pub-list a:hover {
  text-decoration: none;
}

/* ===== A11y ===== */
.visually-hidden {
  position: absolute !important;
  height: 1px; width: 1px;
  overflow: hidden; clip: rect(1px, 1px, 1px, 1px);
  white-space: nowrap; border: 0; padding: 0; margin: -1px;
}

/* ===== Responsiveness ===== */
@media (max-width: 900px) {
  .two-col {
    grid-template-columns: 1fr;
  }
  .stat-panel {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }
}
@media (max-width: 520px) {
  .stat-panel {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
  .fact-cards {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
