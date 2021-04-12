let classifier;
let video;
let label;
let probability;

function setupML() {
  video = createCapture(VIDEO);
  classifier = ml5.imageClassifier('MobileNet', video, modelReady);
  video.hide();
}

function modelReady() {
  select('#status').remove();
  runML();
}

function runML() {
  classifier.predict(gotResult);
}

function gotResult(err, results) {
  label = results[0].className.split(',')[0];
  probability = 100 * results[0].probability;
  select('#result').html(label);
  select('#probability').html(nf(probability, 0, 2));
  select('#ml').show();
}