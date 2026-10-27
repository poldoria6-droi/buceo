import Link from "next/link";
import { FaunaList } from "@/app/fauna/FaunaList";
import { species } from "@/data/species";
import { toSpeciesCardData } from "@/components/SpeciesCard";

export const metadata = {
  title: "Fauna Marina del Mediterráneo y España · Guía de Especies",
  description:
    "Catálogo ilustrado de fauna y flora marina del Mediterráneo y Atlántico español: peces, cefalópodos, crustáceos, corales, tortugas y observación responsable.",
  alternates: {
    canonical: "/fauna",
  },
  openGraph: {
    title: "Fauna Marina del Mediterráneo y España | Buceo Atlas",
    description:
      "Guía visual de especies marinas de España: hábitats, identificación y buceo responsable.",
    url: "/fauna",
    type: "website",
  },
};

export default function FaunaPage() {
  return (
    <section className="section">
      <div className="container">
        <span className="eyebrow">GUÍA DE ESPECIES MARINAS</span>
        <h1>Fauna marina de España: especies del Mediterráneo y Atlántico</h1>
        <p className="lead">
          Identifica los peces, cefalópodos, crustáceos, corales y plantas marinas más representativos de nuestras costas y consulta cómo observarlos sin alterar su hábitat.
        </p>
        <FaunaList species={species.map(toSpeciesCardData)} />
        <p className="data-note">
          La presencia de fauna salvaje varía según la época, la profundidad y las condiciones del mar; los registros documentados son orientativos y no garantizan el avistamiento durante una inmersión.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1rem" }}>
          <Link className="button button-primary" href="/actividades">
            Explorar actividades de buceo →
          </Link>
          <Link className="button button-ghost-dark" href="/centros">
            Ver escuelas de buceo
          </Link>
        </div>
      </div>
    </section>
  );
}
