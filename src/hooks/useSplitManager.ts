import {
    getContributionTotal,
    getContributionAverage,
} from "../constants/util";
import { useEffect, useState } from 'react';
import { AVATARS } from "../constants/constants";
import { Member, Result } from "../constants/types";
import { getSplitSteps, getTotal, getUniqueId } from "../constants/util";

interface MemberCardOpenData {
  id: number;
  firstOpen?: boolean;
}

export const useSplitManager = (initialMembers: Member[]) => {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [memberCardOpen, setMemberCardOpen] = useState<MemberCardOpenData | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  useEffect(() => {
    const contributionList = members.map((m) => m.contribution);
    if (members.length > 1 && getTotal(contributionList) >= 1) {
      setResult(null);
      const res = {
        total: getContributionTotal(members),
        average: getContributionAverage(members),
        steps: getSplitSteps(members),
      };
      setResult(res);
    } else {
      setResult(null);
    }
  }, [members, setResult]);

  const toggleMemberCardOpen = (id: number) => {
    setMemberCardOpen(memberCardOpen?.id === id ? null : { id });
  };

  const updateMember = (member: Member) => {
    let copy = JSON.parse(JSON.stringify(members)) as Member[];
    copy = copy.map((m) => (m.id === member.id ? member : m));
    setMembers(copy);
  };

  const removeMember = (id: number) => {
    let copy = JSON.parse(JSON.stringify(members)) as Member[];
    const index = copy.map((m) => m.id).indexOf(id);
    copy.splice(index, 1);
    setMembers(copy);
  };

  const addMember = () => {
    const idList = members.map((m) => m.id);
    const uniqueId = getUniqueId(idList);
    const avatarName = AVATARS[uniqueId - 1][1];
    const newMember = { id: uniqueId, name: avatarName, contribution: 0 };
    setMembers([...members, newMember]);
    setMemberCardOpen({ id: newMember.id, firstOpen: true });
  };

  return {
    members,
    memberCardOpen,
    result,
    updateMember,
    removeMember,
    addMember,
    toggleMemberCardOpen,
  };
};
