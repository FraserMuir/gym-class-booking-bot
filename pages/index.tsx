const Home = () => {
  return (
    <div>
      <h1>Gym Class Booking Bot</h1>
      <p>This bot is designed to automatically book gym classes at my local gym.</p>
      <p>The bot runs every Monday and Friday at 00:01am to book Zumba classes for the following Monday and Friday respectively.</p>
      <p>An endpoint at <code>/api/book</code> is exposed that is triggered via a Cron Expression in Github Actions</p>
      <p>A guide on how to achieve this can be found <a href="https://vercel.com/guides/how-to-setup-cron-jobs-on-vercel">here</a>.</p>
    </div>
  );
};

export default Home;
