import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProductCard() {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://c8.alamy.com/comp/T33DPT/avengers-endgame-2019-directed-by-anthony-and-joe-russo-starring-bradley-cooper-brie-larson-and-chris-hemsworth-epic-conclusion-and-22nd-film-in-the-marvel-cinematic-universe-T33DPT.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>

  );
}
