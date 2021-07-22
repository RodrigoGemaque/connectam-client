const UrlService = {
  execute({  departure, arrival, date }) {
    return `${!!departure ? `?departure=${departure}` : ''}` 
    // +`${!!search ? '&' : '?'}page=${page}`;
  }
}

export default UrlService;