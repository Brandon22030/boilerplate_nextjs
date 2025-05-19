'use client';

import { Button } from "./Button";
import { Card, CardHeader, CardTitle, CardContent } from "./Card";
import { Input } from "./Input";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useTheme } from "next-themes";
import { useQuery } from "@tanstack/react-query";
import { Counter } from "./Counter";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export function Demo() {
  const [inputValue, setInputValue] = useState("");
  const { theme, setTheme } = useTheme();
  const [clientTheme, setClientTheme] = useState<string | undefined>(undefined);

  // Exemple de requête avec React Query
  const { data: users, isLoading } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      return response.json();
    },
  });

  // Fonction pour tester les notifications
  const showToast = () => {
    toast.success("C'est un message de succès !");
  };

  // Fonction pour tester le changement de thème
  const toggleTheme = () => {
    if (clientTheme) {
      setTheme(clientTheme === "dark" ? "light" : "dark");
    }
  };

  useEffect(() => {
    setClientTheme(theme);
  }, [theme]);

  return (
    <div className="space-y-8">
      {/* Section : Composants UI */}
      <Card>
        <CardHeader>
          <CardTitle>Composants UI</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Boutons</h3>
              <div className="flex gap-2">
                <Button variant="primary">Bouton Principal</Button>
                <Button variant="secondary">Bouton Secondaire</Button>
                <Button variant="outline">Bouton Outline</Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Input</h3>
              <Input
                label="Test Input"
                placeholder="Écrivez quelque chose..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <div>
              <h3 className="font-semibold mb-2">Compteur (Zustand)</h3>
              <Counter />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Section : Features */}
      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Notifications</h3>
              <Button onClick={showToast}>Afficher une notification</Button>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Changement de thème</h3>
              <Button onClick={toggleTheme}>
                {clientTheme ? `Changer le thème (${clientTheme})` : "Chargement du thème..."}
              </Button>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Chargement</h3>
              {isLoading ? (
                <div className="animate-pulse">Chargement des données...</div>
              ) : (
                <div className="space-y-2">
                  <p>Données chargées avec React Query</p>
                  <ul className="list-disc pl-5">
                    {users?.map((user) => (
                      <li key={user.id}>{user.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
