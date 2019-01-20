# frozen_string_literal: true

namespace :test do
  desc "Uji file YAML"
  task :yaml do
    require 'yaml'
    d = Dir["./**/*.yml"]
    d.each do |file|
      begin
        puts "checking : #{file}"
        f = YAML.load_file(file)
      rescue Exception
        puts "failed to read #{file}: #{$!}"
      end
    end
  end

  desc "Bantuan"
  task :help do
    puts <<HELP
Semua proses ini ditangani oleh rake, berikut daftar lengkapnya:

#{%x[rake -T]}

Contoh:
  $ rake test:yaml

Panduan dasar untuk jekyll:
  Untuk build sumber kode:
  $ jekyll build

  Untuk melihat hasil build:
  $ jekyll serve


Panduan lengkap untuk jekyll:

###########################################################################################
#{%x[jekyll -h]}
###########################################################################################


Referensi
- https://github.com/github/pages-gem

HELP
  end
end

task default: "test:help"
