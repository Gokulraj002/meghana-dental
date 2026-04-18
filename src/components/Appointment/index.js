import AppointmentForm from './AppointmentForm';
import AppointmentInfo from './AppointmentInfo';

export default function AppointmentSection() {
  return (
    <section className="appointment-section section-padding" id="appointment">
      <div className="container">
        <div className="section-header animate-fade-up">
          <span className="subtitle">BOOK NOW</span>
          <h2>Schedule Your Appointment</h2>
          <p>
            Take the first step towards a healthier smile. Book your
            consultation with our dental experts today.
          </p>
        </div>
        <div className="row g-5">
          <div className="col-lg-7">
            <AppointmentForm />
          </div>
          <div className="col-lg-5">
            <AppointmentInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
