'use client';

import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card";
import { Demo } from "@/components/ui/demo";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Bienvenue dans votre projet Next.js</h1>
            <p className="text-gray-600">
              Ce boilerplate inclut toutes les configurations nécessaires pour démarrer votre projet Next.js avec TypeScript et Tailwind CSS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Next.js 14</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>React Query</li>
                  <li>ESLint + Prettier</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Thème sombre/lumineux</li>
                  <li>Notifications</li>
                  <li>Gestion des états</li>
                  <li>Composants UI réutilisables</li>
                  <li>Tests prêts à l'emploi</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Développement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Commencez à développer en créant de nouveaux composants dans le dossier <code>src/components</code>.
                </p>
                <div className="mt-4">
                  <Button variant="primary">Créer un composant</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Démonstration des fonctionnalités</h2>
            <Demo />
          </div>
        </div>
      </div>
    </main>
  );
}
