import os
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

def build_pdf(filename):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    # Custom styles
    primary_color = colors.HexColor("#0f172a") # Slate 900
    accent_blue = colors.HexColor("#0284c7")   # Sky 600
    text_dark = colors.HexColor("#1e293b")     # Slate 800
    text_muted = colors.HexColor("#475569")    # Slate 600
    line_blue = colors.HexColor("#0284c7")
    
    # Typography
    name_style = ParagraphStyle(
        'DocName',
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        alignment=TA_CENTER,
        textColor=primary_color
    )
    
    contact_style = ParagraphStyle(
        'DocContact',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11,
        alignment=TA_CENTER,
        textColor=text_muted
    )
    
    section_heading = ParagraphStyle(
        'DocSectionHeading',
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=13,
        textColor=line_blue,
        spaceAfter=3,
        textTransform='uppercase'
    )
    
    item_title_left = ParagraphStyle(
        'DocItemTitleLeft',
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12,
        textColor=primary_color
    )
    
    item_title_right = ParagraphStyle(
        'DocItemTitleRight',
        fontName='Helvetica-Oblique',
        fontSize=9,
        leading=12,
        alignment=TA_RIGHT,
        textColor=text_muted
    )
    
    body_text = ParagraphStyle(
        'DocBody',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=text_dark,
        alignment=TA_LEFT
    )
    
    bullet_text = ParagraphStyle(
        'DocBullet',
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=text_dark,
        leftIndent=12,
        firstLineIndent=-8,
        spaceAfter=2
    )

    story = []

    # 1. Header
    story.append(Paragraph("ADARSH KUMAR", name_style))
    story.append(Spacer(1, 4))
    contact_line = (
        'adarshhgupta336@gmail.com &nbsp;|&nbsp; +91 6207343053 &nbsp;|&nbsp; '
        'Bhubaneswar, Odisha, India &nbsp;|&nbsp; '
        '<font color="#0284c7"><u>linkedin.com/in/adarsh1807</u></font> &nbsp;|&nbsp; '
        '<font color="#0284c7"><u>github.com/Adarshhspeaks</u></font>'
    )
    story.append(Paragraph(contact_line, contact_style))
    story.append(Spacer(1, 8))

    def add_section(title):
        story.append(Spacer(1, 4))
        story.append(Paragraph(title, section_heading))
        story.append(HRFlowable(width="100%", thickness=1.2, color=line_blue, spaceBefore=1, spaceAfter=5))

    # 2. Summary
    add_section("SUMMARY")
    summary_p = (
        "Full-Stack & 3D Web Developer with hands-on experience engineering scalable web applications "
        "using React, Node.js, Python, Three.js, and multi-cloud platforms. Passionate about AI agent workflows, "
        "interactive WebGL simulations, and robust API design. Quick learner with strong problem-solving skills, "
        "experienced in hackathons and startup-speed deployment."
    )
    story.append(Paragraph(summary_p, body_text))
    story.append(Spacer(1, 4))

    # 3. Education
    add_section("EDUCATION")
    edu_data = [
        [
            Paragraph("<b>B.Tech in Computer Science Engineering</b>", item_title_left),
            Paragraph("2024 – Present", item_title_right)
        ],
        [
            Paragraph("<font color='#475569'><i>GPA: 7.76 (up to 4th Semester)</i></font>", body_text),
            Paragraph("", body_text)
        ],
        [
            Paragraph("<b>Class XII (BSEB)</b>", item_title_left),
            Paragraph("Passed 2022", item_title_right)
        ],
        [
            Paragraph("<font color='#475569'><i>Percentage: 75%</i></font>", body_text),
            Paragraph("", body_text)
        ]
    ]
    edu_table = Table(edu_data, colWidths=[380, 160])
    edu_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(edu_table)
    story.append(Spacer(1, 4))

    # 4. Technical Skills
    add_section("SKILLS")
    skills_data = [
        [Paragraph("<b>Languages:</b>", body_text), Paragraph("Java, Python, C, JavaScript, TypeScript, SQL, Solidity", body_text)],
        [Paragraph("<b>Frontend:</b>", body_text), Paragraph("React.js, Redux Toolkit, Three.js, React Three Fiber, Framer Motion, Tailwind CSS, Bootstrap", body_text)],
        [Paragraph("<b>Backend:</b>", body_text), Paragraph("Node.js, Express.js, Flask, SQLAlchemy, Socket.io, REST APIs", body_text)],
        [Paragraph("<b>Databases:</b>", body_text), Paragraph("MongoDB, PostgreSQL, SQLite, Firebase, Supabase", body_text)],
        [Paragraph("<b>Cloud & DevOps:</b>", body_text), Paragraph("AWS, Docker, Kubernetes, Git, GitHub, Vercel, Render, CI/CD", body_text)],
        [Paragraph("<b>AI / Web3:</b>", body_text), Paragraph("Google Gemini AI, DeepSeek, N8N Agent Workflows, Ethers.js, Python ML Microservices", body_text)],
        [Paragraph("<b>Core CS:</b>", body_text), Paragraph("Data Structures & Algorithms, DBMS, OOP, Operating Systems, Computer Networks", body_text)]
    ]
    skills_table = Table(skills_data, colWidths=[90, 450])
    skills_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(skills_table)
    story.append(Spacer(1, 4))

    # 5. Projects
    add_section("PROJECTS")
    
    # Project 1: BRICS-CLIMATY
    story.append(Paragraph("<b>BRICS-CLIMATY – Climate Intelligence & Sustainability Platform</b> &nbsp;|&nbsp; <i>React 18, Vite, Leaflet, Supabase</i>", item_title_left))
    story.append(Paragraph("• <b>Real-Time Airshed Telemetry:</b> Engineered interactive geospatial atmospheric monitoring using Leaflet and live environmental telemetry across BRICS+ territories.", bullet_text))
    story.append(Paragraph("• <b>Solar ROI & Carbon Calculator:</b> Developed dynamic multi-currency solar ROI algorithms and carbon offset calculation engine with Supabase backend persistence.", bullet_text))
    story.append(Paragraph("• <b>Clean Air Restoration Frameworks:</b> Built comprehensive policy, impact tracking, and sustainability action modules for institutional and municipal stakeholders.", bullet_text))
    story.append(Spacer(1, 3))

    # Project 2: Cosmic Watch
    story.append(Paragraph("<b>COSMIC WATCH – NASA 3D Solar System & NEO Radar</b> &nbsp;|&nbsp; <i>React, TypeScript, Three.js, NASA API, Vite</i>", item_title_left))
    story.append(Paragraph("• <b>Full 3D Heliocentric Planetary Engine:</b> Developed a real-time scaled planetary simulation with high-resolution textures, axial tilts, and orbital physics using Three.js.", bullet_text))
    story.append(Paragraph("• <b>Live Asteroid Tracking:</b> Connected NASA JPL NeoWs telemetry to track Near-Earth Objects (NEOs) and Potentially Hazardous Asteroids (PHAs) with true 3D Keplerian mechanics.", bullet_text))
    story.append(Paragraph("• <b>Aerospace HUD:</b> Implemented time-acceleration controls, spacecraft mission telemetry, and live planetary distance radar.", bullet_text))
    story.append(Spacer(1, 3))

    # Project 3: Darshya
    story.append(Paragraph("<b>DARSHYA – AI-Powered Resume Builder & ATS Analyzer</b> &nbsp;|&nbsp; <i>Python, Flask, Google Gemini AI, Firebase</i>", item_title_left))
    story.append(Paragraph("• <b>AI Analysis Engine:</b> Integrated Google Gemini LLM to analyze resume keywords against target job descriptions, delivering instant ATS optimization scores.", bullet_text))
    story.append(Paragraph("• <b>Full-Stack Workflow:</b> Engineered dynamic builder interface with Firebase authentication, real-time preview, and PDF rendering.", bullet_text))
    story.append(Spacer(1, 3))

    # Project 4: Prithvilok
    story.append(Paragraph("<b>PRITHVILOK – Decentralized Sustainability Platform</b> &nbsp;|&nbsp; <i>React, Node.js, MongoDB, Solidity, Python, Socket.io</i>", item_title_left))
    story.append(Paragraph("• <b>Web3 Gamification:</b> Built a blockchain reward system (Solidity smart contracts, Ethers.js) allowing users to earn Eco-Points and mint Green NFTs.", bullet_text))
    story.append(Paragraph("• <b>ML Classification:</b> Integrated a Python computer vision microservice classifying waste images to compute energy savings.", bullet_text))
    story.append(Paragraph("• <b>3D Earth & Real-Time Tracking:</b> Rendered interactive 3D globe using React Three Fiber and live AQI/WQI environmental maps.", bullet_text))
    story.append(Spacer(1, 4))

    # 6. Experience
    add_section("EXPERIENCE")
    exp_header = [
        [Paragraph("<b>Web Designing – Industrial Training (Internship)</b>", item_title_left), Paragraph("June – July 2025", item_title_right)]
    ]
    t = Table(exp_header, colWidths=[380, 160])
    t.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    story.append(t)
    story.append(Paragraph("• Completed hands-on training in modern frontend design (HTML5, CSS3, JavaScript, Bootstrap) building responsive, dynamic web layouts.", bullet_text))
    story.append(Spacer(1, 3))

    devops_header = [
        [Paragraph("<b>Cloud & DevOps Practice</b>", item_title_left), Paragraph("2024 – 2025", item_title_right)]
    ]
    t2 = Table(devops_header, colWidths=[380, 160])
    t2.setStyle(TableStyle([('VALIGN', (0,0), (-1,-1), 'TOP'), ('LEFTPADDING', (0,0), (-1,-1), 0), ('RIGHTPADDING', (0,0), (-1,-1), 0), ('BOTTOMPADDING', (0,0), (-1,-1), 1), ('TOPPADDING', (0,0), (-1,-1), 1)]))
    story.append(t2)
    story.append(Paragraph("• Configured multi-cloud compute and object storage across AWS (S3, EC2), GCP, and Azure with IAM access policies and Kubernetes cluster management.", bullet_text))
    story.append(Paragraph("• Built containerized CI/CD deployment pipelines using Docker and GitHub Actions for continuous automated delivery.", bullet_text))
    story.append(Spacer(1, 4))

    # 7. Certifications
    add_section("CERTIFICATIONS & CREDENTIALS")
    certs_data = [
        [
            Paragraph("• <b>Introduction to Databases</b> — Meta & Coursera", body_text),
            Paragraph("• <b>Introduction to DevOps</b> — IBM & Coursera", body_text)
        ],
        [
            Paragraph("• <b>Gen AI: Beyond the Chatbot</b> — Google Cloud", body_text),
            Paragraph("• <b>Cybersecurity Architecture</b> — IBM & Coursera", body_text)
        ],
        [
            Paragraph("• <b>Intelligent Agents (DeepSeek & N8N)</b> — Board Infinity", body_text),
            Paragraph("• <b>Introduction to Cloud Computing</b> — IBM & Coursera", body_text)
        ],
        [
            Paragraph("• <b>Generative AI: Systems Architecture</b> — SkillUp", body_text),
            Paragraph("• <b>AWS Cloud Practitioner Essentials</b> — AWS", body_text)
        ],
        [
            Paragraph("• <b>Alpha: DSA with Java</b> — Apna College", body_text),
            Paragraph("• <b>Microsoft Excel & PowerPoint</b> — Coursera", body_text)
        ]
    ]
    certs_table = Table(certs_data, colWidths=[270, 270])
    certs_table.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 1.5),
        ('TOPPADDING', (0,0), (-1,-1), 1.5),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(certs_table)

    doc.build(story)
    print(f"PDF generated successfully: {filename}")

if __name__ == "__main__":
    os.makedirs("public", exist_ok=True)
    build_pdf("public/Adarsh_Kumar_Resume.pdf")
