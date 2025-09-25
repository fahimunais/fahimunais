from reportlab.lib.pagesizes import LETTER
from reportlab.pdfgen import canvas
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.lib.enums import TA_LEFT
from reportlab.lib import colors

# ATS-friendly content
cv_data = {
    'name': 'Muhammed Fahim',
    'address': 'Maniyur, Kozhikode, Kerala, India, 673015',
    'email': 'fahimunais57@gmail.com',
    'phone': '+91 85477 64880',
    'linkedin_url': 'https://www.linkedin.com/in/fahim-unais-b907b81b7',
    'title': 'AI Engineer & ML Specialist',
    'summary': 'AI enthusiast with hands-on experience in conversational AI, NLP, and telephony systems. Specialized in designing AI-powered voicebots using RASA and integrating them with telephony backends. Strong foundation in LLMs, RAG, and Agentic AI systems. Passionate about deploying scalable AI architectures for real-world business problems.',
    'skills': [
        'AI Voicebots',
        'RASA NLP',
        'Asterisk & Telephony',
        'Large Language Models (LLMs)',
        'Retrieval-Augmented Generation (RAG) Systems',
        'Agentic AI',
        'Python',
        'Open Source Tech (Ollama, Hugging Face, etc.)'
    ],
    'education': [
        'B.Tech in Information Technology, 2019–2023',
        'College of Engineering Thalassery',
        'Focus: AI/ML, Data Structures & Algorithms, NLP, Computer Networks, DBMS, Web Development',
        'Participated in technical workshops and hackathons'
    ],
    'experience': [
        'AI/ML Engineer, astTECS Communications Pvt Ltd',
        'April 2024 – Present',
        '- Developed advanced AI voicebots and voice agents integrated with telephony systems using Asterisk',
        '- Implemented LLM-powered solutions for customer support automation',
        '- Built RAG pipelines to enhance information access',
        '- Prototyped Agentic AI solutions for proactive customer engagement',
        '- Collaborated on end-to-end deployment of AI systems in production',
        '- Tech: AI Voicebots, RASA, LLMs, RAG, Agentic AI, Asterisk, LiveKit, PipeCat, Alexa Skills'
    ],
    'projects': [
        ('Intelligent Voice Agent', [
            'Sophisticated AI-powered voicebot leveraging open-source technologies for natural, context-aware telephone conversations',
            'Integrated with Asterisk telephony, using STT and TTS for seamless voice interactions',
            'Custom flow management for dynamic, personalized conversations',
            'Achieved 87% successful resolution rate and reduced call handling time by 45%',
            'Tech: RASA, Asterisk, LLMs, Python, TTS, STT, Custom Framework'
        ]),
        ('Enterprise RAG System', [
            'Knowledge management solution combining LLMs with enterprise-specific information retrieval',
            'Automated document ingestion, semantic chunking, and hybrid search (vector + keyword)',
            'Reduced information retrieval time by 85% and improved answer accuracy to 94%',
            'Tech: LangChain, Vector DB, LLMs, FastAPI, Embeddings, Semantic Search'
        ]),
        ('Autonomous AI Agent', [
            'Multi-agent system capable of reasoning, planning, and executing complex tasks with minimal human intervention',
            'Specialized agents (Planner, Research, Execution, Critic) collaborate to solve problems',
            'Reduced human intervention in workflows by 78% and achieved 92% accuracy in complex tasks',
            'Tech: LLM Chains, ReAct, Tool Use, Python, LangChain, Multi-Agent Systems'
        ])
    ]
}

def generate_pdf(filename):
    doc = SimpleDocTemplate(filename, pagesize=LETTER, leftMargin=0.75*inch, rightMargin=0.75*inch, topMargin=0.75*inch, bottomMargin=0.75*inch)
    styles = getSampleStyleSheet()
    story = []

    # Custom style for contact info
    contact_style = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontSize=10.5,
        leading=13,
        spaceAfter=2,
        alignment=TA_LEFT
    )

    # Name and Title
    story.append(Paragraph(f"<b>{cv_data['name']}</b>", styles['Title']))
    story.append(Spacer(1, 0.05*inch))

    # Professional Contact Block
    contact_lines = [
        f"{cv_data['address']}",
        f"Email: <a href='mailto:{cv_data['email']}' color='blue'>{cv_data['email']}</a>",
        f"Phone: {cv_data['phone']}",
        f"<a href='{cv_data['linkedin_url']}' color='blue'><b>LinkedIn</b></a>"
    ]
    for line in contact_lines:
        story.append(Paragraph(line, contact_style))
    story.append(Spacer(1, 0.18*inch))

    story.append(Paragraph(f"<b>{cv_data['title']}</b>", styles['Heading2']))
    story.append(Spacer(1, 0.15*inch))

    # Summary
    story.append(Paragraph('<b>Professional Summary</b>', styles['Heading3']))
    story.append(Paragraph(cv_data['summary'], styles['Normal']))
    story.append(Spacer(1, 0.15*inch))

    # Skills
    story.append(Paragraph('<b>Skills</b>', styles['Heading3']))
    story.append(ListFlowable([ListItem(Paragraph(skill, styles['Normal'])) for skill in cv_data['skills']], bulletType='bullet'))
    story.append(Spacer(1, 0.15*inch))

    # Education
    story.append(Paragraph('<b>Education</b>', styles['Heading3']))
    for line in cv_data['education']:
        story.append(Paragraph(line, styles['Normal']))
    story.append(Spacer(1, 0.15*inch))

    # Experience
    story.append(Paragraph('<b>Professional Experience</b>', styles['Heading3']))
    for line in cv_data['experience']:
        story.append(Paragraph(line, styles['Normal']))
    story.append(Spacer(1, 0.15*inch))

    # Projects
    story.append(Paragraph('<b>Projects</b>', styles['Heading3']))
    for proj_title, proj_points in cv_data['projects']:
        story.append(Paragraph(f'<b>{proj_title}</b>', styles['Normal']))
        story.append(ListFlowable([ListItem(Paragraph(point, styles['Normal'])) for point in proj_points], bulletType='bullet'))
        story.append(Spacer(1, 0.1*inch))

    # References
    story.append(Paragraph('<b>References</b>', styles['Heading3']))
    story.append(Paragraph('Available upon request.', styles['Normal']))

    doc.build(story)

if __name__ == '__main__':
    # Requires: pip install reportlab
    generate_pdf('Muhammed_Fahim_ATS_CV.pdf') 