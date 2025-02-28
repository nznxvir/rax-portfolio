export const scrolltoSection = (id) => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  };  