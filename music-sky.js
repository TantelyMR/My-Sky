window.onSpotifyIframeApiReady = (IFrameAPI) => {
  const element = document.querySelector('#music-play');
  const options = {
    width: '60%',
    height: '200',
    uri: "https://open.spotify.com/track/5NlOyaEtji1DNwsWiOjmXP?si=877c37d368bf4c0c"
  };
  const callback = (EmbedController) => {
    document.querySelector("#music img").addEventListener('click', () => {
      EmbedController.loadUri('https://open.spotify.com/track/5NlOyaEtji1DNwsWiOjmXP?si=877c37d368bf4c0c');
      EmbedController.play();
    });
  };
  IFrameAPI.createController(element, options, callback);
};