import { ThemeLook } from "@/types/site";

interface MotifItem {
  id: string;
  type:
    | "dice"
    | "orbit"
    | "node"
    | "route"
    | "tangram"
    | "maze"
    | "venn"
    | "halo"
    | "meeple"
    | "wave"
    | "chess"
    | "lab"
    | "puzzle"
    | "book"
    | "music"
    | "atom"
    | "globe"
    | "cards"
    | "target"
    | "chat";
  top: string;
  left: string;
  size: string;
  rotate: string;
}

const motifs: MotifItem[] = [
  { id: "m1", type: "orbit", top: "6%", left: "8%", size: "78px", rotate: "-14deg" },
  { id: "m2", type: "dice", top: "14%", left: "79%", size: "56px", rotate: "8deg" },
  { id: "m3", type: "node", top: "23%", left: "62%", size: "92px", rotate: "-3deg" },
  { id: "m4", type: "route", top: "34%", left: "12%", size: "116px", rotate: "-18deg" },
  { id: "m5", type: "maze", top: "42%", left: "82%", size: "74px", rotate: "12deg" },
  { id: "m6", type: "tangram", top: "51%", left: "48%", size: "68px", rotate: "-11deg" },
  { id: "m7", type: "venn", top: "63%", left: "7%", size: "84px", rotate: "0deg" },
  { id: "m8", type: "wave", top: "74%", left: "73%", size: "104px", rotate: "-6deg" },
  { id: "m9", type: "halo", top: "83%", left: "26%", size: "70px", rotate: "9deg" },
  { id: "m10", type: "meeple", top: "88%", left: "84%", size: "52px", rotate: "-9deg" },
  { id: "m11", type: "dice", top: "58%", left: "31%", size: "50px", rotate: "-15deg" },
  { id: "m12", type: "node", top: "9%", left: "42%", size: "88px", rotate: "5deg" },
  { id: "m13", type: "route", top: "27%", left: "32%", size: "82px", rotate: "13deg" },
  { id: "m14", type: "orbit", top: "69%", left: "91%", size: "86px", rotate: "-17deg" },
  { id: "m15", type: "maze", top: "48%", left: "92%", size: "56px", rotate: "5deg" },
  { id: "m16", type: "venn", top: "19%", left: "90%", size: "66px", rotate: "0deg" },
  { id: "m17", type: "chess", top: "37%", left: "4%", size: "62px", rotate: "-8deg" },
  { id: "m18", type: "lab", top: "80%", left: "58%", size: "64px", rotate: "6deg" },
  { id: "m19", type: "puzzle", top: "11%", left: "24%", size: "58px", rotate: "7deg" },
  { id: "m20", type: "book", top: "31%", left: "22%", size: "56px", rotate: "-10deg" },
  { id: "m21", type: "music", top: "54%", left: "16%", size: "52px", rotate: "11deg" },
  { id: "m22", type: "atom", top: "66%", left: "38%", size: "96px", rotate: "-12deg" },
  { id: "m23", type: "globe", top: "86%", left: "66%", size: "62px", rotate: "6deg" },
  { id: "m24", type: "cards", top: "44%", left: "69%", size: "58px", rotate: "14deg" },
  { id: "m25", type: "target", top: "25%", left: "52%", size: "72px", rotate: "-4deg" },
  { id: "m26", type: "chat", top: "72%", left: "11%", size: "66px", rotate: "-6deg" },
  { id: "m27", type: "meeple", top: "92%", left: "43%", size: "48px", rotate: "0deg" },
  { id: "m28", type: "puzzle", top: "5%", left: "63%", size: "52px", rotate: "-15deg" },
  { id: "m29", type: "book", top: "60%", left: "92%", size: "54px", rotate: "8deg" },
  { id: "m30", type: "music", top: "33%", left: "95%", size: "50px", rotate: "4deg" },
  { id: "m31", type: "atom", top: "14%", left: "10%", size: "88px", rotate: "18deg" },
  { id: "m32", type: "target", top: "78%", left: "79%", size: "64px", rotate: "-9deg" },
  { id: "m33", type: "chat", top: "47%", left: "36%", size: "56px", rotate: "3deg" },
  { id: "m34", type: "cards", top: "90%", left: "16%", size: "54px", rotate: "-13deg" },
];

export function MensaMotifBackground({ look }: { look: ThemeLook }) {
  return (
    <div className="motif-layer" aria-hidden="true">
      {motifs.map((motif) => (
        <span
          key={motif.id}
          className={`motif motif-${motif.type}`}
          data-look={look}
          style={{
            top: motif.top,
            left: motif.left,
            width: motif.size,
            height: motif.size,
            transform: `translate(-50%, -50%) rotate(${motif.rotate})`,
          }}
        />
      ))}
    </div>
  );
}
