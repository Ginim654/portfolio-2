import { Mail, Phone, Linkedin, MapPin, Globe } from 'lucide-react';
import { resumeData } from '@/lib/data';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 sm:p-8 lg:p-12 print:p-0">
      <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-2xl print:shadow-none print:rounded-none print:p-0">
        <header className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-border">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold font-headline text-primary">{resumeData.name}</h1>
          </div>
          <div className="text-sm text-muted-foreground mt-4 sm:mt-0">
            <div className="flex items-center justify-center sm:justify-end gap-x-4 gap-y-1 flex-wrap">
              <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-primary"><Mail className="h-4 w-4" />{resumeData.contact.email}</a>
              <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-2 hover:text-primary"><Phone className="h-4 w-4" />{resumeData.contact.phone}</a>
              <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary"><Linkedin className="h-4 w-4" />/ginim-narang-631924283</a>
            </div>
          </div>
        </header>

        <main className="mt-6">
          <section>
            <h2 className="text-2xl font-bold font-headline border-b-2 border-primary pb-2 mb-4">Education</h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">{resumeData.education.degree}</h3>
                <p className="text-muted-foreground">{resumeData.education.institution}</p>
                <ul className="mt-2 list-disc list-inside text-muted-foreground">
                  <li>CGPA: {resumeData.education.cgpa}</li>
                  {resumeData.education.details.map((detail, i) => <li key={i}>{detail}</li>)}
                </ul>
              </div>
              <p className="text-muted-foreground font-medium">{resumeData.education.duration}</p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold font-headline border-b-2 border-primary pb-2 mb-4">Projects</h2>
            <div className="space-y-6">
              {resumeData.projects.map((project, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-1">
                    {project.points.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold font-headline border-b-2 border-primary pb-2 mb-4">Hackathons & Achievements</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {resumeData.achievements.map((achievement, index) => <li key={index}>{achievement}</li>)}
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold font-headline border-b-2 border-primary pb-2 mb-4">Technical Skills</h2>
            <div className="space-y-2">
              <div>
                <span className="font-semibold">Languages: </span>
                <span className="text-muted-foreground">{resumeData.skills.languages.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold">Frontend: </span>
                <span className="text-muted-foreground">{resumeData.skills.frontend.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold">Backend: </span>
                <span className="text-muted-foreground">{resumeData.skills.backend.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold">Tools: </span>
                <span className="text-muted-foreground">{resumeData.skills.tools.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold">Other: </span>
                <span className="text-muted-foreground">{resumeData.skills.other.join(', ')}</span>
              </div>
            </div>
          </section>
        </main>
        
        <style jsx global>{`
          @media print {
            body {
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            .min-h-screen {
                min-height: auto;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ResumePage;
