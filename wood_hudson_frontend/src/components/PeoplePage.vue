<template>
  <div class="people-page">
    <header class="page-header">
      <h1>Our People</h1>
      <nav class="toc" aria-label="Section navigation">
        <a href="#urep">UREP Director</a>
        <a href="#biospecimen">Biospecimen Repository Center Staff</a>
        <a href="#administrative">Administrative Staff</a>
        <a href="#board">Board of Directors</a>
        <a href="#founder">Our Founder</a>
      </nav>
    </header>

    <!-- UREP Director -->
    <section id="urep" class="section">
      <h2>UREP Director</h2>
      <div class="people-grid">
        <article class="person-card">
          <div class="person-photo-wrap">
            <img
              class="person-photo"
              :src="urepDirector.photo || placeholder"
              :alt="`Photo of ${urepDirector.name}`"
            />
          </div>
          <div class="person-content">
            <h3 class="person-name">{{ urepDirector.name }}</h3>
            <p class="person-title">{{ urepDirector.title }}</p>
            <p v-if="urepDirector.desc" class="person-desc">{{ urepDirector.desc }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Biospecimen Repository Center Staff -->
    <section id="biospecimen" class="section">
      <h2>Biospecimen Repository Center Staff</h2>
      <div class="people-grid">
        <article v-for="person in biospecimenStaff" :key="person.name" class="person-card">
          <div class="person-photo-wrap">
            <img
              class="person-photo"
              :src="person.photo || placeholder"
              :alt="`Photo of ${person.name}`"
            />
          </div>
          <div class="person-content">
            <h3 class="person-name">{{ person.name }}</h3>
            <p class="person-title">{{ person.title }}</p>
            <p v-if="person.desc" class="person-desc">{{ person.desc }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Administrative Staff -->
    <section id="administrative" class="section">
      <h2>Administrative Staff</h2>
      <div class="people-grid">
        <article v-for="person in adminStaff" :key="person.name" class="person-card">
          <div class="person-photo-wrap">
            <img
              class="person-photo"
              :src="person.photo || placeholder"
              :alt="`Photo of ${person.name}`"
            />
          </div>
          <div class="person-content">
            <h3 class="person-name">{{ person.name }}</h3>
            <p class="person-title">{{ person.title }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Board of Directors -->
    <section id="board" class="section">
      <h2>Board of Directors</h2>
      <p class="section-desc">
        {{ boardIntro }}
      </p>

      <div class="people-grid">
        <article v-for="person in boardMembers" :key="person.name" class="person-card">
          <div class="person-photo-wrap">
            <img
              class="person-photo"
              :src="person.photo || placeholder"
              :alt="`Photo of ${person.name}`"
            />
          </div>
          <div class="person-content">
            <h3 class="person-name">{{ person.name }}</h3>
            <p class="person-title">{{ person.title }}</p>
            <p class="person-desc">{{ person.desc }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- Our Founder -->
    <section id="founder" class="section">
      <h2>Our Founder</h2>
      <div class="people-grid">
        <article class="person-card">
          <div class="person-photo-wrap">
            <img
              class="person-photo"
              :src="founder.photo || placeholder"
              :alt="`Photo of ${founder.name}`"
            />
          </div>
          <div class="person-content">
            <h3 class="person-name">{{ founder.name }}</h3>
            <p class="person-title">{{ founder.title }}</p>
            <p class="person-desc">{{ founder.desc }}</p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "PeoplePage",
  data() {
    return {
      // Neutral gray SVG placeholder; replace with real paths when available
      placeholder:
        'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900"><rect width="100%" height="100%" fill="%23f2f2f2"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="36" fill="%23999">Photo</text></svg>',

      urepDirector: {
        name: "Joseph Bruns, PhD",
        title: "Staff Scientist",
        photo: ""
      },

      biospecimenStaff: [
        {
          name: "Elyse Hawkins, B.A.",
          title: "Tissue Bank Manager",
          photo: ""
        }
      ],

      adminStaff: [
        {
          name: "Denise Byrum, MS, MBA",
          title: "Senior Director Operations and Organizational Development",
          photo: ""
        },
        { name: "Sharon Bresser", title: "Financial Manager", photo: "" },
        { name: "Carole Ewald", title: "Admin. Assistant", photo: "" },
        { name: "Bill Meader", title: "Facilities Manager", photo: "" }
      ],

      boardIntro:
        "The Wood Hudson Officers and Board of Trustees govern the not-for-profit, publicly supported organization. The Trustees and Officers are ultimately responsible for Financial Planning, Legal Matters, Evaluating and Recruiting Research Scientists and Research Collaboration, Fund Raising, Facilities, Audits and Strategic Planning. We thank this group of civic minded individuals for donating their time and talents to Wood Hudson Cancer Research Laboratory.",

      boardMembers: [
        {
          name: "Percy H. Carter, Ph.D",
          title: "President and Chairman",
          photo: "",
          desc: `Dr. Carter brings more than 20 years of global leadership in pharmaceutical companies and industry experience. He currently serves as the Chief Scientific Officer at Blueprint Medicines, and has additionally served in leadership roles at FibroGen, Inc., and Janssen Pharmaceuticals, Inc., a division of Johnson & Johnson. From August 2001 to May 2019, Dr. Carter held roles of increasing responsibility in drug discovery, covering all therapeutic areas, drug platforms and stages of discovery at Bristol-Myers Squibb (BMS), including serving as Senior Vice President and Head of Discovery. Prior to his experience at BMS, he was Senior Research Scientist in Chemical and Physical Sciences at DuPont Pharmaceuticals, until it was acquired by BMS in 2001. Dr. Carter is an inventor or co-inventor on more than 28 U.S. patents, and has authored or co-authored numerous peer-reviewed publications. Dr. Carter received an A.B. in Chemistry from Dartmouth College and a Ph.D. in Organic Chemistry from Harvard University. In addition, he received an MBA from Massachusetts Institute of Technology.`
        },
        {
          name: "Allison Bartlett, M.D.",
          title: "Scientific Affairs Committee",
          photo: "",
          desc: `Dr. Allison Bartlett is a Pediatric Hematologist/Oncologist in the Division of Bone Marrow Transplant at Cincinnati Children’s Hospital. She cares for critically ill children with cancer and blood disorders, and their families. In addition to her clinical work, Dr. Bartlett is also passionate about the significant role of research in furthering the field. She dedicates part of her time as a physician to translational research efforts, working in the lab to better understand the difficulties that are encountered at the bedside, and bringing those insights back to the patients. Dr. Bartlett’s current focus is surrounding the study of optimal nutrition and metabolism, and its role in impacting health outcomes for children during and after hematopoietic stem cell transplant.

Dr. Bartlett's undergraduate degree is from the University of North Carolina, and her M.D. is from the University of Kentucky College of Medicine. Dr. Bartlett was a student in Wood Hudson's UREP in 2007. She writes, “I left Wood Hudson with an unwavering sense of purpose, passion and desire to continue to contribute through research. I spoke about it in my medical school interviews and continue to speak about it today to the medical students I teach.”`
        },
        {
          name: "Sidney W. Carter, Ph.D., P.G.(KY)",
          title: "Scientific Affairs Committee",
          photo: "",
          desc: `Dr. Carter is a Petrographer and Professional Geologist. He is a Senior Consulting Geologist at Simpson, Gumpertz, & Heger in Waltham, MA, where he conducts petrographic examination of concrete and stone, as well as forensic investigations of a variety of building materials using microscopy and spectroscopy. Dr. Carter earned his B.A. at Dartmouth College in Classical Archaeology modified with Earth Sciences. His Ph.D. is from Stanford University in Geological and Environmental Sciences. Following his Ph.D., Dr. Carter worked for six years at Massachusetts Institute of Technology at the Center for Materials Research in Archaeology and Ethnology. As a Research Scientist, his research focused on the geological constitution of ceramic raw materials to address archaeological questions about ceramic technology and provenance. He also was a Technical Instructor and Mentor for the Undergraduate Research Opportunities Program.`
        },
        {
          name: "Larry E. Douglass, M.D.",
          title: "Chairman of Scientific Affairs Committee",
          photo: "",
          desc: `Dr. Douglass is a Pathologist who is certified with the American Board of Pathology in Anatomic Pathology and Clinical Pathology. Dr. Douglass earned his M.D. from Vanderbilt University School of Medicine. He completed a fellowship in Cytology, and later a fellowship in Pathology at what is now Memorial Sloan Kettering Cancer Center. Dr. Douglass worked as a Pathologist at the University of Geneva in Switzerland and also at the University of Brussels in Belgium. He was an Assistant Professor of Pathology and Director of the Division of Cytopathology at the College of Medicine and Dentistry of New Jersey. Later, he was the Attending Pathologist and Chief of Cytopathology at the Saint Barnabas Medical Center. Dr. Douglass also worked as an Adjunct Assistant Professor of Pathology in the College of Physicians and Surgeons of Columbia University. An original founding member of Wood Hudson Cancer Research Laboratory, Dr. Douglass is the Director of Pathology at Wood Hudson. Dr. Douglass is heavily involved in Wood Hudson’s Undergraduate Research Education Program (UREP).`
        },
        {
          name: "Jeremy Graff, Ph.D.",
          title: "Scientific Affairs Committee",
          photo: "",
          desc: `Dr. Graff is the Chief Scientific Officer at IMV Inc., a clinical-stage biopharmaceutical company pioneering a novel class of immunotherapies against difficult-to-treat cancers. His main focus is on Translational Science as a means of enhancing the likelihood of clinical and regulatory success for novel cancer therapeutics and immune therapeutics. Dr. Graff started his career at Thomas More College in Northern Kentucky. He earned his Ph.D. at the University of Kentucky, and did post-doctoral studies at the Johns Hopkins University School of Medicine. Dr. Graff worked at Eli Lilly and Company and Biothera Pharmaceuticals and has over 20 years of experience in preclinical and clinical research and translational analysis for novel immune-activating therapeutics in oncology. Dr. Graff also serves on the editorial board of Cancer Research, the flagship publication of the American Association for Cancer Research.`
        },
        {
          name: "Douglas J. Hartman, M.D.",
          title: "Vice-Chairman of Scientific Affairs Committee",
          photo: "",
          desc: `Dr. Hartman is an Academic Surgical Pathologist and an Associate Professor of Pathology with a subspecialty interest and focus in Gastrointestinal and Pancreatic pathology at the University of Pittsburgh Medical Center. He is also the Vice Chair of the Pathology Informatics Division and Director of Image Analysis Laboratory. Dr. Hartman consults on surgical pathology cases involving the luminal GI tract and pancreas. He developed and deployed automated image analysis as well machine learning for clinical diagnostic support.

Dr. Hartman was a student in the Wood Hudson UREP program in 1998-99. He received a Bachelor’s degree from Xavier University and an M.D. from the University of Cincinnati College of Medicine. Dr. Hartman was a resident in Pathology at the University Hospitals of Cleveland/Case Western Reserve University, and a fellow in Pathology (Gastrointestinal Pathology) at the University of Pittsburgh Medical Center.`
        },
        {
          name: "Robert J. Layton, C.P.A., Treasurer",
          title: "Treasurer, Chairman of Finance Committee",
          photo: "",
          desc: `Mr. Layton is a Certified Public Accountant with 36 years of professional experience. He is a Certified Financial Planner and is licensed by the Certified Financial Planner Board of Standards, Inc. in Washington, D.C. Mr. Layton has earned the designation as a Personal Financial Specialist from the American Institute of Certified Public Accountants. Mr. Layton spent 23 years at KPMG, one of the world's largest accounting firms, and was the Director of Personal Financial Planning of the Cleveland office for ten years. He was responsible for the overall management of the practice that included several Fortune 100 clients. He was also nationally recognized as a lead instructor at several of the firm's annual management training seminars and a nationally designated gift tax reviewer and technical advisor. Mr. Layton is a frequent lecturer to boards of directors, civic organizations, and professional groups.`
        },
        {
          name: "Tyler Kette, M. Tax.",
          title: "Vice Chairman of Finance Committee",
          photo: "",
          desc: `Mr. Kette is a Tax Manager at FSM Capital Management. He solves complex tax issues and caters to the needs of financially successful corporations, partnerships, families and individuals. Mr. Kette studied at the University of Akron, where he completed a B.S. in Accounting and a Master's Degree, Master of Taxation. He has experience in Tax, Audit and Advisory at both a large international accounting firm (KPMG) as well as a large regional firm (Rea & Associates).`
        },
        {
          name: "Tim Schwiebert",
          title: "Financial Committee",
          photo: "",
          desc: `Tim Schwiebert is a Financial Adviser with over 25 years of experience in financial services, focusing on client-centered investment strategies. He currently serves at Topsail Wealth Management, where he provides personalized financial guidance emphasizing long-term investing and cost-effective solutions. Tim’s son, Grant, participated in Wood Hudson’s Undergraduate Research Education Program (UREP) in the summer of 2024.`
        },
        {
          name: "Michael P. Murray, CFRE",
          title: "Chairman of Endowment and Development Committees",
          photo: "",
          desc: `Michael P. Murray, CFRE, currently serves as the Director of Stewardship and Mission Services for the Diocese of Covington. Prior to joining the Diocesan Curia staff, Mr. Murray spent four years at Roger Bacon High School as their Director of Advancement. Before moving to Roger Bacon, Mr. Murray served as Director of Major Gifts in Cincinnati for the Chicago Province Jesuits; Director of Major and Planned Giving for Northern Kentucky University; and Director of Annual Giving for the College of Mount St. Joseph.

Mr. Murray is a member of the Executive Team for the Serra Club for Vocations, Northern Kentucky, and served as president of the organization for four years. Mr. Murray has carried the professional designation as a Certified Fund-Raising Executive (CFRE) for over 20 years, and has served on the Association of Fundraising Professionals Greater Cincinnati Chapter Board of Directors, serving one year as Chapter President. Mr. Murray also served on the Greater Cincinnati Planned Giving Council Board of Directors, the NKU Friends of Steely Library (FOSL) Board of Directors, serving as FOSL Board President for four years. He also currently serves as chair of the Kenton County Ethics Commission.

Mr. Murray holds a Bachelor's of Arts in Education from Xavier University and a Masters of Arts in Education from Northern Kentucky University. Mr. Murray’s son, Dr. Kevin Murray, was a student in the UREP program at Wood Hudson for three years and is now a fellow in Pediatrics at Cincinnati Children’s Hospital.`
        },
        {
          name: "Mark Shields",
          title: "Development Committee",
          photo: "",
          desc: `Mr. Shields is a Project Executive for Messer Construction; he manages the design and construction of large, complex buildings in the Aviation, Health Care, Higher Education, Industrial, and Science and Technology market segments. Mr. Shields studied at the University of Cincinnati for a Bachelor’s degree in Construction Management. His son, Dr. Robert Shields, participated in the UREP program, has since completed his education, and now is a Podiatrist on the staff of St. Elizabeth’s Hospital.`
        },
        {
          name: "Ronald D. Snyder, Ph.D.",
          title: "Scientific Affairs Committee",
          photo: "",
          desc: `Dr. Snyder received his BS from Moravian College in Bethlehem, PA and both an MS and Ph.D. from Emory University in Atlanta. He completed a post-doctoral degree at Oak Ridge National Labs and Johns Hopkins. He has played leadership roles is assessing the safety of novel chemical entities for Stauffer Chemical Co, Marion Merrell Dow, Abbott Labs, DuPont Pharma, Bristol Myers Squibb, Schering-Plough Pharma and most recently, Merck Pharma. Dr. Snyder also spent two years at Wood Hudson. He has authored or co-authored over 123 peer-reviewed papers and book chapters which, excluding self-citations, have been cited over 4,800 times in more than 1,000 different scientific journals. Dr. Synder has remained active in scientific societies and journal editorial review boards, and serves as a consultant for Pharma in Genetic Toxicology. Dr. Snyder is heavily involved in Wood Hudson’s Undergraduate Research Education Program (UREP).`
        }
      ],

      founder: {
        name: "Julia H. Carter, Ph.D. (In memory 1943-2024)",
        title: "President and Chairman",
        photo: "",
        desc: `Dr. Julia Carter studied at Wellesley College, where she earned a Bachelor’s degree in Philosophy with a minor in Chemistry. Wood Hudson’s Undergraduate Research Education Program (UREP) was developed as a result of her experience as an undergraduate summer intern at the Cancer Research Institute of New England Deaconess Hospital. For three years after graduation, she continued to work in cancer research at the Cancer Research Institute under two Harvard Medical School professors, a professor of Pathology and a professor of Biochemistry. Dr. Carter earned her Master’s degree and Ph.D. in Physiology at Rutgers University, and then completed post-doctoral training at Rutgers under the Director of The Bureau of Biological Research. Life and jobs took the Carter family to Cleveland, where Dr. Julia Carter, Dr. Harry Carter, Dr. Larry Douglass and Mr. Sidney Wood founded Wood Hudson in 1981 as a not-for-profit laboratory dedicated to cancer research. In 1984 the lab moved to Covington, KY, and then in 1990 to Newport, KY, where it has thrived. Dr. Carter has served as Principal Investigator on five U.S. EPA funded cooperative research agreements as well as on research agreements with five pharmaceutical and biotechnology companies.`
      }
    };
  }
};
</script>

<style scoped>
:root {
  --bg: #fafafa;
  --card-bg: #ffffff;
  --text: #222;
  --muted: #666;
  --brand: #0f766e; /* teal-ish accent */
  --ring: rgba(15, 118, 110, 0.15);
}

.people-page {
  padding: 2rem 1rem 4rem;
  background: var(--bg);
  color: var(--text);
}

.page-header {
  max-width: 1100px;
  margin: 0 auto 1rem;
}

.page-header h1 {
  font-size: clamp(1.8rem, 2.4vw, 2.4rem);
  margin: 0 0 0.5rem;
  letter-spacing: 0.2px;
}

.toc {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.toc a {
  text-decoration: none;
  font-size: 0.95rem;
  padding: 0.35rem 0.65rem;
  border: 1px solid #e5e7eb;
  border-radius: 999px;
  background: #fff;
  color: var(--brand);
  transition: box-shadow 0.2s ease, transform 0.1s ease;
}

.toc a:hover {
  box-shadow: 0 0 0 6px var(--ring);
  transform: translateY(-1px);
}

.section {
  max-width: 1100px;
  margin: 2rem auto 0;
  scroll-margin-top: 80px;
}

.section h2 {
  font-size: clamp(1.3rem, 2vw, 1.6rem);
  margin: 0 0 0.75rem;
}

.section-desc {
  color: var(--muted);
  font-size: 0.98rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: clamp(0.9rem, 2vw, 1.25rem);
}

.person-card {
  background: var(--card-bg);
  border: 1px solid #eef2f7;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.12s ease, box-shadow 0.12s ease;
}

.person-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.07);
}

.person-photo-wrap {
  aspect-ratio: 4 / 3;
  background: #f5f6f7;
}

.person-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.person-content {
  padding: 1rem 1rem 1.1rem;
}

.person-name {
  font-size: 1.05rem;
  margin: 0 0 0.25rem;
  line-height: 1.35;
}

.person-title {
  font-size: 0.95rem;
  color: var(--brand);
  margin: 0 0 0.6rem;
}

.person-desc {
  font-size: 0.95rem;
  color: var(--muted);
  line-height: 1.65;
  white-space: pre-line; /* respect newlines in backtick strings */
}

/* Small tweaks for very narrow screens */
@media (max-width: 380px) {
  .people-grid {
    grid-template-columns: 1fr;
  }
}
</style>
