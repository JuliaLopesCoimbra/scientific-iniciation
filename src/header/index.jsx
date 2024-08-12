import React from 'react';
import './styles.css';
import { Fragment, useState } from 'react';
import { Dialog,Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-black nav z-50 relative">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5" src="">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 burguer absolute top-4 left-4"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <a href="/home" className="text-sm font-semibold leading-6 text-gray-900">
            Pagina Inicial
          </a>
          <a href="/sobre" className="text-sm font-normal leading-6 text-gray-900">
            Sobre mim
          </a>
          <a href="/pesquisa" className="text-sm font-normal leading-6 text-gray-900">
            Pesquisa
          </a>
          <a href="/publicacoes" className="text-sm font-normal leading-6 text-gray-900">
            Publicações
          </a>
          <a href="/contato" className="text-sm font-normal leading-6 text-gray-900">
            Contato
          </a>
          <a href="/aprenda" className="text-sm font-normal leading-6 text-gray-900">
            Aprenda com a pesquisa
          </a>
        </Popover.Group>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src=""
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-white"
                >
                  Pagina Inicial
                </a>
                <a
                  href="sobre"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white"
                >
                  Sobre mim
                </a>
                <a
                  href="/pesquisa"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white"
                >
                  Pesquisa
                </a>
                <a
                  href="publicacoes"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white"
                >
                  Publicações
                </a>
                <a
                  href="contato"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white"
                >
                  Contato
                </a>
                <a
                  href="aprenda"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 text-white"
                >
                  Aprenda com a Pesquisa
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
