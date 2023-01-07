"use client";
import React, { useEffect, useState } from "react";
import axiox from "axios";
import Image from "next/image";
import { BASE_URL } from "../api/endpoint";
type TAgent = {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  displayIcon: string;
  fullPortrait: string;
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isAvailableForPlay: boolean;
  isHidden: boolean;
};
export default function Agents() {
  const [agents, setAgents] = useState<TAgent[]>([]);
  const getAgents = async () => {
    const response = await axiox.get(`${BASE_URL}/agents`);
    setAgents(response.data.data);
  };
  useEffect(() => {
    getAgents();
  }, []);
  return (
    <>
      <div className="text-3xl text-center p-5">Valorant Agents With Api</div>
      <div className="grid grid-cols-3 gap-4">
        {agents.map((agent) => (
          <div key={agent.uuid} className="bg-gray-200 rounded-lg p-4">
            <div className="text-center">
              <Image
                src={agent.displayIcon}
                alt={agent.displayName}
                width="200"
                height="200"
              />
            </div>
            <div className="text-center text-xl font-bold">
              {agent.displayName}
            </div>
            <div className="text-center text-lg">{agent.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}
