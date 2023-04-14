import { Post } from "../types/Post.interface";

export const data:Post[] = [
    {
      name: "The republic", 
      author: "Plato",
      description: "Published around 380 BCE, Plato\'s most famous work explores the idea of justness, among other things, through a Socratic dialogue. Considered to be one of the most influential writings in the development of Western philosophy and political theory, The Republicis as relevant today as when it was originally published.A modern design makes this timeless book perfect for any library. Essential volumes for the shelves of every classic literature lover, the Chartwell Classics series includes beautifully presented works and collections from some of the most important authors in literary history. Chartwell Classics are the editions of choice for the most discerning literature buffs.",
      image: require('../assets/theRepublic.jpeg'),
      isFavorite: false
    },
    {
      name: "Between Giants", 
      author: "Prit Buttar",
      description: "The Baltic States suffered more than almost any other territory during World War II, caught on the front-line of some of the war's most vicious battles and squeezed between the vast military might of the German Wehrmacht and the Soviet Red Army. From an expert on the Eastern Front of World War II, this book chronicles the cataclysmic experience of the region that includes modern-day Lithuania, Estonia and Latvia. Combining new archival research and numerous first-hand accounts, this is a magisterial description of conquest and exploitation, of death and deportation and the fight for survival both by countries and individuals.",
      image: require('../assets/betweenGiants.jpeg'),
      isFavorite: false
    },
    {
      name: "Thus Spoke Zarathustra", 
      author: "Friedrich Nietzsche",
      description: "Could it be possible? This old saint in the forest hath not yet heard of it, that God is dead!\" The ancient Persian prophet Zarathustra descends from a life of solitude on the mountain to announce to the world that God has been supplanted by the \"Superman\", the divine in human form. In one of the most radical and influential works of modern philosophy, Friedrich Nietzsche lays out the new standards of morality after the \"death of God\". Frequently misrepresented (and hijacked to dangerous purpose by Nazi intellectuals), Thus Spake Zarathustra is a work of profound brilliance and poetic mastery which still provides meaning in today's complex and changing world. ",
      image: require('../assets/thusSpokeZarathustra.jpeg'),
      isFavorite: false
    },
]